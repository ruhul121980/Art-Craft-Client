import React from 'react';

export default function Frequently() {
  return (
    <div className="container mx-auto px-4">
      <h2 className='text-center font-bold text-3xl lg:text-4xl xl:text-5xl my-7'>FREQUENTLY ASKED QUESTIONS</h2>
      <div className="grid gap-4">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked /> 
          <div className="collapse-title text-lg lg:text-xl font-medium">
            Why Should You Buy Art and Craft Online in BD From R.A.H Art & Craft Supplies?
          </div>
          <div className="collapse-content"> 
            <p>There are some reasons why you should buy art and craft online from Picasso Art & Supplies
              · We’re a proudly owned the business with three branches.
              · We have over 2,000 art & craft products for you to choose from.
              · We stock high-quality, well-known, and respected brands such as Krafter’s Korner, Art Spectrum, and Mod Podge.
              · As well as traditional arts and crafts, we’re also crafting the art of fantastic customer service that will make you feel right at home.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-lg lg:text-xl font-medium">
            What Makes Us The First Choice To Buy?
          </div>
          <div className="collapse-content"> 
            <p>R.A.H Art and Crafts is an Bangladeshi-owned retail store that offers a vast selection of art, crafts, and other merchandise to a broad demographic of customers. We  have three branches. We are devoted to being our customer’s first choice for product selection, value, and service that inspires and fulfills unlimited creative possibilities.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-lg lg:text-xl font-medium">
            Are Return And Exchange Available On Buying Art and Craft Online From R.A.H Craft & Art Supplies?
          </div>
          <div className="collapse-content"> 
            <p>Here at R.A.H Art and Craft, we believe that in order to have the best possible online shopping experience, you should be able to return your unused product by buying paint online or at our store.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
