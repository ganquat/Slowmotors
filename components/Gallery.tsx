import React from 'react';

const images = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJND7MhhAqwRG0Vm6J75HVf4u8zacG89VGkcF3KvcM8FxO61jinIkvyO9csfnKzngX0BwcG0M5UnnME6XWEErlKixZ2ABgvoVab3kChrPVOrBvyCXDl3UvTkGNvC5ib1OBAUTf_XT64zYjgcx7bH_WbmNCel4zAdfnaRlmDgf2KVqRI6IT4mNq3Sh2mEwI1LgphRpApR_9mitduzuWF0rsP-g31R2vZRCpJfP2ZC0SYOhec6drsU1gmxVFzC--d1qqSK1x6ItLX0k2", title: "Tea Hills", span: "row-span-2" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKW-TAcDC00jE-y8lNe0IH7eLDY1vIijDBetJc5BIy2vEUVq1ayIu2PChckhe8WLDYNklyzbemvce1MD0qvhFHjphk7DGBfnA6YY1eXNddH_fjJH0Pw_TRlI6Jn2nzuUoRFoBCmi_oR2gp2TZ2xxJezN3NqbuTVtotdOij_69BPnNIz1Lj5l5Yef6BQ-PnvN7A5LMz3pDKY8l6hx8xe2R8ZDy7CaUrx1lg-Bc0nQ9DG_TQjGcIIcGrQ4d2_Ng7cb4PFlRdKSMb_SDv", title: "Coastal Roads", span: "row-span-1" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJhmD4lRXoNwQ7-zCqztwAEpXrqM191PV9-zcxoAKY0AJXIykbUOPAB3B6lEvLJmEfyu45eyQ1BJnIonOfVRzb3-_3tlKXvaynpnkfzAO2bGZIGfVNGPi3kTalm6JRGhz9SN0cEuIJMWPO2IsvPjObFfWd72of1OMKlNYa3PQ-2x366hZKys85C95_ZlYkxPvPzR9iBFGYR8CuzQ_BUnqOb30mw97yEuewai-aGAgwgfc16UwkBMMDX-xWLrt0gyHaOkDfVCu3xI11", title: "Warm Smiles", span: "row-span-1" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCT3SX8rz7PUnPkssBLonNBEK6dyt_kDBB1sNrA8jHCCi2OpHuo9Uymqf8Iadhh57Ud-uEe2xQ7Zgp-uR7wv3zOvQgb_leyfU6KEcUV87jPuD7dC3qmsQYpRUiNbE_wJ8oxMDeKNfcJb-iPCGG-nXAPmL-ThPj6a4FOHNriNXYhMks7PkXsdPu5Wa9clTJ_TB9ljdhYvTfUHnDDgOh5s55jw9AG4D0d1TFPHX0Mm52jMh8ir70vgsD5MhZ1JAPE4b4IvGJxTcLkWdD2", title: "Culinary", span: "row-span-2" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO2aBRsfXKh2IReduZXGkyMsvmzBOB1LFysRZ6BAf8EZnz1Cxc4TZ6mkY13U6A0oQmttIXKNpyTB6skeusgaDLv70mqorLYaxASsmTupKRSq3S6m6kyKz0E6kl-1w0Fbz_aoQa0itrCsOTJxEgiO6l2K74-OfC4mWITcJ4jHoYTAb81NwRe8CP4TnXYqsqovXOgGLT4iaULA5Y2CnUQ-PymuEp2nfUMdLk9ptv3s5r7vksDqZQna6yqb1MGOyIkvxKbuUyqd0PIFEF", title: "Ancient Temples", span: "row-span-1" },
   { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwhNYB_ai86pOlkjc1X0M-9gNPiOtm39bRcUARsmOe0iQh37P7YJm2yS1AMOJz-3K4m1Z2K1-VKmkpjuW58VB2C4xBdGoBBq36vVvJNXyLQ6YbVgYdsDQ2vWeBhLb0BhCgQSsT8omvWpcG3UZXrenPGpz6eDkUVUjtAc57sVxeeBU0JtpGaQ2CN9C9CxG5Y6TKWDKqTF1KS0DrBkhQa66VoAHI3wVwW9n-0x7mHyOIhapa9XUUoq0uQfocGFU8wmALJqechEzVYbDC", title: "Golden Hour", span: "row-span-1" },
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-surface-light dark:bg-surface-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Discover the <span className="text-secondary italic">Magic</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
             Immerse yourself in the authentic beauty of Southern India. Experience every curve of the road on a Royal Enfield.
          </p>
          
           <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="px-6 py-2 bg-primary text-white rounded-full text-sm uppercase tracking-wide font-bold shadow-md hover:bg-primary-dark transition-colors">All Moments</button>
            <button className="px-6 py-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm uppercase tracking-wide font-bold border border-gray-200 dark:border-gray-700 transition-colors">The Ride</button>
            <button className="px-6 py-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm uppercase tracking-wide font-bold border border-gray-200 dark:border-gray-700 transition-colors">Landscapes</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-4">
          {images.map((img, idx) => (
            <div key={idx} className={`relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${img.span === 'row-span-2' ? 'md:row-span-2 h-[416px]' : 'h-[200px]'}`}>
              <img 
                src={img.src} 
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-display text-xl italic">{img.title}</h3>
                  <p className="text-gray-300 text-xs uppercase tracking-widest mt-1">Slow Moto Tours</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};