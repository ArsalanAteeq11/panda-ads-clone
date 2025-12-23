import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Working with foodpanda has been transformative for our business. The targeting capabilities and reach are unmatched.",
      author: "Sarah Chen",
      company: "Modern Kitchen Co.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png",
    },
    {
      quote:
        "We've seen a 3x ROI on our advertising spend within the first month. The platform is incredibly effective.",
      author: "Mike Rodriguez",
      company: "Fusion Bistro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/200px-Facebook_f_logo_%282019%29.svg.png",
    },
    {
      quote:
        "The analytics and insights provided help us make data-driven decisions. Customer acquisition has never been easier.",
      author: "Lisa Wong",
      company: "Green Garden Restaurant",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/200px-Instagram_logo_2022.svg.png",
    },
  ];

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          What our customers are saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-gray-700 text-sm mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900 text-sm">
                  {testimonial.author}
                </p>
                <p className="text-gray-600 text-xs mt-1">
                  {testimonial.company}
                </p>
                <img
                  src={testimonial.logo}
                  alt={testimonial.company}
                  className="h-6 mt-3 opacity-50"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
