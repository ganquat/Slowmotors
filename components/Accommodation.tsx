import React from 'react';

export const Accommodation: React.FC = () => {
  return (
    <section id="accommodation" className="py-24 px-4 bg-surface-light dark:bg-surface-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Off the Saddle</span>
           <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Accommodation</h2>
           <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
               "After a day on the road on your motorbike holidays you deserve nothing but a kind treat."
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                 <p className="mb-4">
                    We selected the most charming, outstanding and warm-hearted accommodations on our route to drop your helmet for the night.
                    We will live in beach- jungle- and farm- resorts, lovingly converted heritage buildings, contemporary architecture villas or eco villages.
                </p>
                <p className="mb-4">
                    All our accommodations offer the kind of luxury and well-being that is common and possible for the respective region.
                    Enjoy marvelous bucket showers gently rinsing off the day´s dust. Lean back on the cozy veranda and let your spirit free.
                </p>
                <p>
                    Our offer is based on shared twin room accommodation. While two separate beds for double occupancy are not standard in many Indian accommodations, there will always be ensuite bathrooms. If you want to have a room to yourself, you may purchase our single accommodation supplement.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr1rrYvNhgIVOtRGtYsmyRh9EMoYizquk0Ls2LQdrKSYVVUEg4y649GyXBpBRnp4hnV1EoQV35BORmOdw98uAc4HnAzRtRrbeXjHimgQHhMvtxfp7WtZIznJgC5JA98RcqbqGjlLvcCanLGucjbozt8Sp3jVSy0Lny1Fn-LNfeqY_ibNuUUkc-i6PytqqgGkcW-oS2zzVVy-y6xM6GpOdPG4FblfEW_NxW6o06c5I-UNS8tKDdbe7NrO9G9H7sDWAowD7FXkguJfLw" alt="Resort View" className="rounded-2xl shadow-lg w-full h-48 object-cover transform translate-y-8" />
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC04ITMcH459xFk-I6kY8srTDVY6xnIkkr1rxIlWSZQdtXMsd0Tk7PnQIa9LwmsMoembkYqv9MwkDKG0sMn2RwEsfF3zjKVrVNyySn977oJcRnOKhKojEExuDymdWRj3VhimGItuuULm5NabA9Mjp1kLFa-sydAiTZmgnVaAWmrE38VhtaTw6w-JQ1kyiUzCZ6489UjmqCIXcjls2zsIwXnUZIfGypdXLYt2cz_xZRSOOpGZjaURKt7lURMGdQ4F_tcS9CA0ARCbS3E" alt="Cozy Room" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
            </div>
        </div>
      </div>
    </section>
  );
};