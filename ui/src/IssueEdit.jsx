import React from "react";

export default function IssueEdit({ match }) {
  const { id } = match.params;
  return <h2>{`This is a placeholer for editing issue ${id}`}</h2>;
}
