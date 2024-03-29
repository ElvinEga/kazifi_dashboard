import React from "react";
import MainDashboard from "../components/layout/MainDashboard";
import { Button } from "@/components/ui/button";
import { LayoutGrid, LayoutList } from "lucide-react";

const InterviewPage = () => {
  return (
    <MainDashboard>
      <div>
        <nav className="flex justify-between items-center p-2.5 border-b border-gray-300 mb-5">
          <div className="flex space-x-4">
            <Button variant="outline"> Easy</Button>
            <Button variant="outline">Medium</Button>
            <Button variant="outline">Hard</Button>
          </div>
          <div className="flex space-x-4 items-center">
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
              placeholder="Search problems"
              type="text"
            />
            <LayoutList className="h-8 w-8" />
            <LayoutGrid className="h-8 w-8" />
          </div>
        </nav>
        <div className="mx-auto min-h-screen w-full overflow-y-auto pb-40">
          <div className=" grid grid-cols-1 gap-8 px-4 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/levenshtein-distance">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-yellow-700 to-yellow-500 text-white px-2 py-0.5 text-sm mb-2">
                      Medium
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Levenshtein Distance
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given 2 strings, find the minimum number of operations
                    required to change one string to the other. An operation is
                    defined as either replacement of a ...
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/levenshtein-distance">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/google"
                  >
                    Google
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/youtube"
                  >
                    Youtube
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/amazon"
                  >
                    Amazon
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/cisco"
                  >
                    Cisco
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/salesforce"
                  >
                    Salesforce
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/sap-labs"
                  >
                    SAP Labs
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/spotify"
                  >
                    Spotify
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/arrays"
                    >
                      #Arrays
                    </a>
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/dynamic-programming"
                    >
                      #Dynamic Programming
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>1 like</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/minimum-number-of-coins-to-make-change">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-yellow-700 to-yellow-500 text-white px-2 py-0.5 text-sm mb-2">
                      Medium
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Minimum Number Of Coins To Make Change
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given an array of coins or denominations and a target sum,
                    calculate the minimum number of coins required to match the
                    total. Note that the coins arra...
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/minimum-number-of-coins-to-make-change">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/google"
                  >
                    Google
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/amazon"
                  >
                    Amazon
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/jp-morgan"
                  >
                    JP Morgan
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/morgan-stanley"
                  >
                    Morgan Stanley
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/delhivery"
                  >
                    Delhivery
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/arrays"
                    >
                      #Arrays
                    </a>
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/dynamic-programming"
                    >
                      #Dynamic Programming
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>1 like</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/number-of-ways-to-make-change">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-yellow-700 to-yellow-500 text-white px-2 py-0.5 text-sm mb-2">
                      Medium
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Number of Ways To Make Change
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given a target amount and a set of denominations (coins),
                    find the total number of ways the given target amount can be
                    expressed by using the denomina...
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/number-of-ways-to-make-change">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/facebook"
                  >
                    Facebook
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/google"
                  >
                    Google
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/youtube"
                  >
                    Youtube
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/makemytrip"
                  >
                    MakeMyTrip
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/airbnb"
                  >
                    AirBnB
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/delhivery"
                  >
                    Delhivery
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/arrays"
                    >
                      #Arrays
                    </a>
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/dynamic-programming"
                    >
                      #Dynamic Programming
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>1 like</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/maximum-subset-sum-with-no-adjacent">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-yellow-700 to-yellow-500 text-white px-2 py-0.5 text-sm mb-2">
                      Medium
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Maximum Subset Sum With No Adjacent
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given an array of POSITIVE INTEGERS, find the greatest sum
                    that can be generated without adding 2 numbers positioned
                    next to each other.
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/maximum-subset-sum-with-no-adjacent">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/hackerrank"
                  >
                    Hackerrank
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/cisco"
                  >
                    Cisco
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/paypal"
                  >
                    Paypal
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/zomato"
                  >
                    Zomato
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/arrays"
                    >
                      #Arrays
                    </a>
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/dynamic-programming"
                    >
                      #Dynamic Programming
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>1 like</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/height-balanced-binary-tree">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-yellow-700 to-yellow-500 text-white px-2 py-0.5 text-sm mb-2">
                      Medium
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Height Balanced Binary Tree
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given a pointer to the root node of a binary tree, return
                    true if the binary tree is height-balanced. A
                    height-balanced binary tree is a Binary tree i...
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/height-balanced-binary-tree">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/microsoft"
                  >
                    Microsoft
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/hewlett-packard"
                  >
                    Hewlett-Packard
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/intel"
                  >
                    Intel
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/informatica"
                  >
                    Informatica
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/recursion"
                    >
                      #Recursion
                    </a>
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/tree-traversal"
                    >
                      #Tree Traversal
                    </a>{" "}
                  </small>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/find-successor">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-yellow-700 to-yellow-500 text-white px-2 py-0.5 text-sm mb-2">
                      Medium
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Find Successor
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given the root of a binary tree and a node in it, return the
                    in-order successor of that node in the BST. If the given
                    node has no in-order successor i...
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/find-successor">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/facebook"
                  >
                    Facebook
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/google"
                  >
                    Google
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/amazon"
                  >
                    Amazon
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/recursion"
                    >
                      #Recursion
                    </a>
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/tree-traversal"
                    >
                      #Tree Traversal
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>1 like</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/binary-tree-diameter">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-yellow-700 to-yellow-500 text-white px-2 py-0.5 text-sm mb-2">
                      Medium
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Binary Tree Diameter
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given a Binary Tree, Return an integer that represents the
                    diameter of the Binary Tree. A Diameter is the length of the
                    longest path in the Binary Tre...
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/binary-tree-diameter">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/sap-labs"
                  >
                    SAP Labs
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/zomato"
                  >
                    Zomato
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/netflix"
                  >
                    Netflix
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/hotstar"
                  >
                    Hotstar
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/recursion"
                    >
                      #Recursion
                    </a>{" "}
                  </small>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/spiral-traversal">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-yellow-700 to-yellow-500 text-white px-2 py-0.5 text-sm mb-2">
                      Medium
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Spiral Traversal
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given a 2D matrix of numbers, return a spiral traversal of
                    the matrix in the clockwise direction.
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/spiral-traversal">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/facebook"
                  >
                    Facebook
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/google"
                  >
                    Google
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/microsoft"
                  >
                    Microsoft
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/hewlett-packard"
                  >
                    Hewlett-Packard
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/arrays"
                    >
                      #Arrays
                    </a>
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/recursion"
                    >
                      #Recursion
                    </a>{" "}
                  </small>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/smallest-difference">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
                      Easy
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Smallest Difference
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given two arrays of integers, find the pair of values (one
                    value in each array) with the smallest (non-negative)
                    difference.
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/smallest-difference">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/facebook"
                  >
                    Facebook
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/amazon"
                  >
                    Amazon
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/spotify"
                  >
                    Spotify
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/apple"
                  >
                    Apple
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/oracle"
                  >
                    Oracle
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/arrays"
                    >
                      #Arrays
                    </a>
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/sorting"
                    >
                      #sorting
                    </a>
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/two-pointer"
                    >
                      #Two Pointer
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>1 like</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/bst-traversal">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
                      Easy
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    BST Traversal
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given a Binary Search Tree, Traverse the tree in Preorder,
                    Postorder, and inorder traversal.
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/bst-traversal">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/google"
                  >
                    Google
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/youtube"
                  >
                    Youtube
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/salesforce"
                  >
                    Salesforce
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/intuit"
                  >
                    Intuit
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/recursion"
                    >
                      #Recursion
                    </a>
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/tree-traversal"
                    >
                      #Tree Traversal
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>1 like</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/depth-first-search">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
                      Easy
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Depth First Search
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Depth-first search (DFS) is an algorithm for traversing or
                    searching tree or graph data structures. The algorithm
                    starts at the root node (selecting s...
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/depth-first-search">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/facebook"
                  >
                    Facebook
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/google"
                  >
                    Google
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/youtube"
                  >
                    Youtube
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/amazon"
                  >
                    Amazon
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/recursion"
                    >
                      #Recursion
                    </a>
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/tree-traversal"
                    >
                      #Tree Traversal
                    </a>{" "}
                  </small>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/invert-binary-tree">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-yellow-700 to-yellow-500 text-white px-2 py-0.5 text-sm mb-2">
                      Medium
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Invert Binary Tree
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given a binary tree, invert the binary tree - Inverting a
                    binary tree means that the resulting binary tree should be a
                    mirror replica of the input bin...
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/invert-binary-tree">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/google"
                  >
                    Google
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/oracle"
                  >
                    Oracle
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/netflix"
                  >
                    Netflix
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/recursion"
                    >
                      #Recursion
                    </a>
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/bfs"
                    >
                      #BFS
                    </a>{" "}
                  </small>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/sorted-squared-array">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
                      Easy
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Sorted Squared Array
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given an array of integers A sorted in non-decreasing order,
                    return an array of the squares of each number, also in
                    sorted non-decreasing order.
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/sorted-squared-array">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/apple"
                  >
                    Apple
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/sorting"
                    >
                      #sorting
                    </a>
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/two-pointer"
                    >
                      #Two Pointer
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>1 like</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/nth-fibonacci">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
                      Easy
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Nth Fibonacci
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given an integer n, return the nth Fibonacci number. In
                    mathematics, the Fibonacci numbers form a sequence called
                    the Fibonacci sequence - In which ea...
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/nth-fibonacci">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/amazon"
                  >
                    Amazon
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/oracle"
                  >
                    Oracle
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/hotstar"
                  >
                    Hotstar
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/arrays"
                    >
                      #Arrays
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>2 likes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/string-compression">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
                      Easy
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    String Compression
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given a string of alphabets (from a to z), Print the count
                    of the character appearing in the string right next to it.
                    This is also called Run Length E...
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/string-compression">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/amazon"
                  >
                    Amazon
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/hewlett-packard"
                  >
                    Hewlett-Packard
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/netflix"
                  >
                    Netflix
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/searching"
                    >
                      #searching
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>2 likes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/move-element">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
                      Easy
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Move Element
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given an array of integers and a target value, move all
                    instances of that target value to the end end of the array.
                    The order of the resulting array d...
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/move-element">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/amdocs"
                  >
                    Amdocs
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/intel"
                  >
                    Intel
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/arrays"
                    >
                      #Arrays
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>1 like</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/remove-duplicates-from-a-linked-list">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
                      Easy
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Remove Duplicates From a Linked List
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given a sorted linked list, delete all duplicates such that
                    each element appear only once.
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/remove-duplicates-from-a-linked-list">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/facebook"
                  >
                    Facebook
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/google"
                  >
                    Google
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/youtube"
                  >
                    Youtube
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/linked-list"
                    >
                      #Linked List
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>2 likes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/kth-largest-in-a-bst">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-yellow-700 to-yellow-500 text-white px-2 py-0.5 text-sm mb-2">
                      Medium
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Kth Largest in a BST
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Find Kth largest in a BST - Given a BST and a number k, find
                    the kth largest element in the BST.{" "}
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/kth-largest-in-a-bst">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/amazon"
                  >
                    Amazon
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/sorting"
                    >
                      #sorting
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>1 like</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/non-repeating-first-character">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
                      Easy
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Non Repeating First Character
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given a string of characters, return the index of the first
                    non-repeating character.
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/non-repeating-first-character">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/sap-labs"
                  >
                    SAP Labs
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/arrays"
                    >
                      #Arrays
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>1 like</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/palindrome-check">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
                      Easy
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      20 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Palindrome Check
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given a string of characters, Check if the given string is a
                    palindrome or not. A palindrome is a word, phrase, or
                    sequence that reads the same backwa...
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/palindrome-check">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/intuit"
                  >
                    Intuit
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/sorting"
                    >
                      #sorting
                    </a>
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/recursion"
                    >
                      #Recursion
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>3 likes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/product-sum">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
                      Easy
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Product Sum
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given an array (that can have nested arrays) - return the
                    sum of all the numbers in the array. If nested array is
                    encountered, recursively add the num...
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/product-sum">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/directi"
                  >
                    Directi
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/arrays"
                    >
                      #Arrays
                    </a>
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/recursion"
                    >
                      #Recursion
                    </a>{" "}
                  </small>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/three-number-sum">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
                      Easy
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Three Number Sum
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given an array of integers, find three integers in the array
                    that sum to a specific target number.
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/three-number-sum">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/facebook"
                  >
                    Facebook
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/google"
                  >
                    Google
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/searching"
                    >
                      #searching
                    </a>
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/sorting"
                    >
                      #sorting
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>1 like</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/bst-construction">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-yellow-700 to-yellow-500 text-white px-2 py-0.5 text-sm mb-2">
                      Medium
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      35 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    BST Construction
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Construct a Binary Search Tree and implement that implements
                    insert, search, traverse and delete methods.
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/bst-construction">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/google"
                  >
                    Google
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/amazon"
                  >
                    Amazon
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/searching"
                    >
                      #searching
                    </a>
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/sorting"
                    >
                      #sorting
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>5 likes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/branch-sums">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
                      Easy
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Branch Sums in a Binary Tree
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given a Binary Tree, compute the sum of all the branches in
                    the tree. 1 branch is the path from the root to a leaf.
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/branch-sums">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/amazon"
                  >
                    Amazon
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/directi"
                  >
                    Directi
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/recursion"
                    >
                      #Recursion
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>3 likes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/binary-search">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
                      Easy
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Binary Search
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    Given an array of sorted integers in ascending order, and a
                    target integer, write a function to search target in nums
                    array. If target exists, return ...
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/binary-search">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/facebook"
                  >
                    Facebook
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/google"
                  >
                    Google
                  </a>
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/amazon"
                  >
                    Amazon
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/searching"
                    >
                      #searching
                    </a>
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/sorting"
                    >
                      #sorting
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>1 like</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col items-start justify-between rounded-2xl border border-gray-900 bg-[#252731] p-6 shadow-xl duration-200 hover:border-[#06b6d430] hover:shadow-[#06b6d4]/10 ">
              <a href="/problems/monotonic-array">
                <div>
                  <div className="flex w-full flex-row justify-between">
                    <p className="rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
                      Easy
                    </p>
                    <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      30 minutes
                    </div>
                  </div>
                  <h1 className="mb-2 text-2xl font-semibold tracking-normal text-gray-50">
                    Monotonic Arrays
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6 text-gray-400">
                    A monotonic array is an array whose elements, from left to
                    right, are entirely non-increasing, or entirely
                    non-decreasing. Return true if the given ar...
                  </p>
                </div>
              </a>
              <div className="w-full">
                <a href="/problems/monotonic-array">
                  <small className="mb-4 flex flex-row flex-wrap items-center" />
                </a>
                <small className="mb-4 flex flex-row flex-wrap items-center">
                  <a
                    className="mr-2 text-gray-400 hover:text-gray-50"
                    href="/companies/facebook"
                  >
                    Facebook
                  </a>
                </small>
                <div className="flex w-full flex-1 flex-row items-center justify-between">
                  <small className="flex w-[80%] flex-wrap text-xs">
                    <a
                      className="mr-1 font-semibold text-gray-500 hover:text-[#06b6d4]"
                      href="/tags/searching"
                    >
                      #searching
                    </a>{" "}
                  </small>
                  <div className="flex flex-shrink-0 items-center justify-center space-x-1 text-xs text-gray-300">
                    <p>1 like</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainDashboard>
  );
};
export default InterviewPage;
