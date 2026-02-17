
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { categoryConfig } from '../config/CategoryConfig';

import SubCategoryCards from "./SubCategoryCards";



export default function Article() {
  const { category, subCategory } = useParams();
  const navigate = useNavigate();
  // const cfg = categoryConfig[category] || { subCategories: [] };
  const cfg = categoryConfig[category];



  <SubCategoryCards
  category={category}
  subCategories={cfg.subCategories}
/>;
}

