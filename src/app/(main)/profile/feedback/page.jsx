"use client";

import React, { useState } from "react";
import { MessageSquare, Star } from "lucide-react";
import { FcIdea } from "react-icons/fc";

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert("Feedback submitted!");
    setRating(0);
    setMessage("");
  };

  return (
    <div className="md:col-span-3 min-h-screen bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 lg:p-10 shadow-sm">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Give Your Feedback
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          We value your opinion. Let us know how we can improve.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Rating */}
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
            Rate your experience
          </label>

          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer transition-all ${
                  star <= rating
                    ? "text-blue-600 fill-blue-600"
                    : "text-gray-300 dark:text-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
            Your feedback
          </label>

          <div className="relative ">
            <MessageSquare
              className="absolute top-3 left-3 text-blue-600"
              size={18}
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder="Write your feedback here..."
              className="w-full bg-transparent pl-10 pr-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 shadow dark:shadow-white/20 shadow-black/20"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-sm font-medium transition-all shadow-md hover:scale-[1.02]"
        >
          Submit Feedback
        </button>
      </form>

      {/* Extra Info */}
      <div className="mt-10 p-5 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-900">
        <p className="text-sm text-gray-700 dark:text-g ay-300 text-center flex items-center gap-1">
          <FcIdea /> Your feedback helps us improve SportsHub and deliver a better experience.
        </p>
      </div>
    </div>
  );
};

export default FeedbackPage;