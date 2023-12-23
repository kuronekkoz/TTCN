import useHovered from "hooks/useHover";
import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function DichVuItems({ item }) {
  if (item) {
    return (
      <div className="flex flex-col space-y-4">
        <Link
          to={item.path || "/"}
          className="text-2xl text-left text-lime-500 "
        >
          {item.title}
        </Link>
        <div className="text-left">{item.description}</div>
      </div>
    );
  } else {
    return (
      <Link to={item.path || "#"} className="text-2xl">
        {item.title}
      </Link>
    );
  }
}
