import React from "react";
import { Button } from "@/components/ui/button";
import { CirclePlus, CircleMinus } from "lucide-react";

const FormButton = ({ size, remove, add }) => {
  return (
    <div className="flex-wrap-gap-2 space-x-2 mb-2">
      <Button variant="secondary" type="button" onClick={add} aria-label="Add">
        <CirclePlus className="h-4 w-4" />
      </Button>
      {size > 0 && (
        <Button
          variant="secondary"
          type="button"
          onClick={remove}
          aria-label="Remove"
        >
          <CircleMinus className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default FormButton;
