// import { Card } from "./ui/card";
// import { Button } from "./ui/button";
// import { Heart, ThumbsDown } from "lucide-react";

// export default function PhotoCard({ photo }) {
//   return (
//     <Card className="p-4 bg-white shadow-md rounded-2xl">
//       <img
//         src={`http://localhost:5000/uploads/${photo.filename}`}
//         alt="uploaded"
//         className="w-full h-64 object-cover rounded-xl"
//       />
//       <div className="flex justify-between items-center mt-3">
//         <p className="font-semibold text-gray-700">
//           @{photo.uploader.username}
//         </p>
//         <div className="flex gap-2">
//           <Button variant="ghost" className="text-pink-600 hover:text-pink-800">
//             <Heart className="mr-1 h-4 w-4" /> {photo.likes}
//           </Button>
//           <Button variant="ghost" className="text-blue-600 hover:text-blue-800">
//             <ThumbsDown className="mr-1 h-4 w-4" /> {photo.dislikes}
//           </Button>
//         </div>
//       </div>
//     </Card>
//   );
// }
