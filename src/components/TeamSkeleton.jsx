// src/components/TeamSkeleton.jsx
export default function TeamSkeleton() {
  return (
    <div className="min-w-[260px] p-6 bg-white rounded-2xl shadow animate-pulse">
      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
    </div>
  );
}