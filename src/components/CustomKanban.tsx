//@ts-nocheck
import { useState } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { Plus } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export const CustomKanban = () => {
  return (
    <div className="h-screen w-full  text-primary">
      <Board />
    </div>
  );
};

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 h-full w-full  gap-4 overflow-scroll px-6">
      <Column
        title="WHISTLIST"
        column="whishlist"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="APPLIED"
        column="applied"
        headingColor="text-yellow-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="INTERVIEW"
        column="interview"
        headingColor="text-blue-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="OFFER"
        column="offer"
        headingColor="text-emerald-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="REJECTED"
        column="rejected"
        headingColor="text-red-500"
        cards={cards}
        setCards={setCards}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

const Column = ({ title, headingColor, cards, column, setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e: DragEvent) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    // clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    // clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="w-full shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => {
          return (
            <CardBoard key={c.id} {...c} handleDragStart={handleDragStart} />
          );
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

const CardBoard = ({ company, title, id, column, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { company, title, id, column })}
        className="cursor-gra active:cursor-grabbing"
      >
        <Card className="p-4">
          <CardTitle className="text-sm">{company}</CardTitle>
          <CardDescription>{title}</CardDescription>
          <div className="flex justify-end items-end pt-6">
            <p className="text-xs text-muted-foreground">1 day ago</p>
          </div>
        </Card>
      </motion.div>
    </>
  );
};

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};

const BurnBarrel = ({ setCards }) => {
  const [active, setActive] = useState(false);
  const { toast } = useToast();

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");
    setCards((pv) => pv.filter((c) => c.id !== cardId));
    setActive(false);
    toast({
      title: "Deleted",
      description: "The job has been removed from the board",
    });
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-300 bg-neutral-500/10 text-neutral-500"
      }`}
    >
      {active ? <Flame className="animate-bounce" /> : <Flame />}
    </div>
  );
};

const AddCard = ({ column, setCards }) => {
  const [text, setText] = useState("");
  const [company, setCompany] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      company: company.trim(),
      id: Math.random().toString(),
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <input
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add Company..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-slate-800 placeholder-violet-400 focus:outline-0"
          />
          <textarea
            onChange={(e) => setCompany(e.target.value)}
            autoFocus
            placeholder="Add Job Description..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 mt-2 text-sm text-slate-800 placeholder-violet-400 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              <Plus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add Job</span>
          <Plus />
        </motion.button>
      )}
    </>
  );
};

const DEFAULT_CARDS = [
  // BACKLOG
  {
    company: "Google",
    title: "Senior UI/UX Designer",
    id: "1",
    column: "whishlist",
  },
  {
    company: "Meta",
    title: "Expert Vue.JS Developer",
    id: "2",
    column: "whishlist",
  },
  {
    company: "Pintrest",
    title: "Senior Software Engineer",
    id: "3",
    column: "whishlist",
  },
  {
    company: "Microsoft",
    title: "Senior iOS Engineer",
    id: "4",
    column: "whishlist",
  },
  // TODO
  {
    company: "Tesla",
    title: "PHP Developer",
    id: "5",
    column: "applied",
  },
  {
    company: "Crunchbase",
    title: "Senior Fullstack Software Developer",
    id: "6",
    column: "applied",
  },
  {
    company: "Zuri Tech",
    title: "Mobile Engineer",
    id: "7",
    column: "applied",
  },

  // DOING
  {
    company: "Toyota",
    title: "Security Engineer",
    id: "8",
    column: "interview",
  },
  {
    company: "Spotify",
    title: "Application Developers",
    id: "9",
    column: "interview",
  },
  // DONE
  {
    company: "Amazon",
    title: "Site Reliability Engineer",
    id: "10",
    column: "offer",
  },
];
