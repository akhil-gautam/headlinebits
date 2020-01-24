import React from "react";

import { headlinesURL } from "../Api";
import Headlines from "../components/shared/Headlines";

const CATEGORIES = [
  { key: "", title: "General" },
  { key: "business", title: "Business" },
  { key: "sports", title: "Sports" },
  { key: "technology", title: "Technology" },
  { key: "science", title: "Science" },
  { key: "health", title: "Health" },
  { key: "entertainment", title: "Entertainment" }
];

const RenderHeadlines = () =>
  CATEGORIES.map(category => (
    <Headlines
      categoryURL={headlinesURL}
      category={category.key}
      categoryTitle={category.title}
      key={category.key}
    />
  ));

export default RenderHeadlines;
