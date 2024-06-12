import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Signup } from './pages/signup';
import { Signin } from './pages/signin';
import { Explore } from './pages/explore';
import { Home } from './pages/home';
import { Profile } from './pages/profile';
import { Cart } from './pages/cart';


function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App


// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/H7HHFiexTRj
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { CardTitle, CardDescription, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"

// export default function Component() {
//   return (
//     <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
//       <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
//         <div className="flex h-full max-h-screen flex-col gap-2">
//           <div className="flex h-[60px] items-center border-b px-6">
//             <Link className="flex items-center gap-2 font-semibold" href="#">
//               <Package2Icon className="h-6 w-6" />
//               <span className="">Acme Inc</span>
//             </Link>
//             <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
//               <BellIcon className="h-4 w-4" />
//               <span className="sr-only">Toggle notifications</span>
//             </Button>
//           </div>
//           <div className="flex-1 overflow-auto py-2">
//             <nav className="grid items-start px-4 text-sm font-medium">
//               <Link
//                 className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <HomeIcon className="h-4 w-4" />
//                 Home
//               </Link>
//               <Link
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <ShoppingCartIcon className="h-4 w-4" />
//                 Orders
//                 <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge>
//               </Link>
//               <Link
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <PackageIcon className="h-4 w-4" />
//                 Products
//               </Link>
//               <Link
//                 className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
//                 href="#"
//               >
//                 <UsersIcon className="h-4 w-4" />
//                 Customers
//               </Link>
//             </nav>
//           </div>
//           <div className="mt-auto p-4">
//             <Card>
//               <CardHeader className="pb-4">
//                 <CardTitle>Upgrade to Pro</CardTitle>
//                 <CardDescription>Unlock all features and get unlimited access to our support team</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Button className="w-full" size="sm">
//                   Upgrade
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col">
//         <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
//           <Link className="lg:hidden" href="#">
//             <Package2Icon className="h-6 w-6" />
//             <span className="sr-only">Home</span>
//           </Link>
//           <div className="w-full flex-1">
//             <form>
//               <div className="relative">
//                 <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
//                 <Input
//                   className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
//                   placeholder="Search products..."
//                   type="search"
//                 />
//               </div>
//             </form>
//           </div>
//           <Button
//             className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
//             size="icon"
//             variant="outline"
//           >
//             <img
//               alt="Avatar"
//               className="rounded-full"
//               height="32"
//               src="/placeholder.svg"
//               style={{
//                 aspectRatio: "32/32",
//                 objectFit: "cover",
//               }}
//               width="32"
//             />
//             <span className="sr-only">Toggle user menu</span>
//           </Button>
//         </header>
//         <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
//           <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
//             <Card className="flex flex-col gap-2">
//               <CardHeader className="pb-0">
//                 <CardTitle className="text-base">Dashing Denim Jacket</CardTitle>
//                 <CardDescription className="text-sm">Classic style meets modern comfort</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <img
//                   alt="Thumbnail"
//                   className="aspect-square rounded-lg object-cover"
//                   height="200"
//                   src="/placeholder.svg"
//                   width="200"
//                 />
//               </CardContent>
//               <CardFooter>
//                 <div className="grid gap-1 text-sm">
//                   <p className="flex items-center gap-2">
//                     <PackageIcon className="h-4 w-4" />
//                     SKU: #345672
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <PackageIcon className="h-4 w-4" />
//                     Category: Apparel
//                   </p>
//                 </div>
//                 <div className="flex items-center justify-between mt-4">
//                   <div className="text-2xl font-semibold">$79.99</div>
//                   <Button size="sm">Edit</Button>
//                 </div>
//               </CardFooter>
//             </Card>
//             <Card className="flex flex-col gap-2">
//               <CardHeader className="pb-0">
//                 <CardTitle className="text-base">Sleek Stainless Steel Watch</CardTitle>
//                 <CardDescription className="text-sm">Timeless elegance for the modern wrist</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <img
//                   alt="Thumbnail"
//                   className="aspect-square rounded-lg object-cover"
//                   height="200"
//                   src="/placeholder.svg"
//                   width="200"
//                 />
//               </CardContent>
//               <CardFooter>
//                 <div className="grid gap-1 text-sm">
//                   <p className="flex items-center gap-2">
//                     <PackageIcon className="h-4 w-4" />
//                     SKU: #345673
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <PackageIcon className="h-4 w-4" />
//                     Category: Watches
//                   </p>
//                 </div>
//                 <div className="flex items-center justify-between mt-4">
//                   <div className="text-2xl font-semibold">$129.99</div>
//                   <Button size="sm">Edit</Button>
//                 </div>
//               </CardFooter>
//             </Card>
//             <Card className="flex flex-col gap-2">
//               <CardHeader className="pb-0">
//                 <CardTitle className="text-base">Cozy Cable-Knit Sweater</CardTitle>
//                 <CardDescription className="text-sm">Warmth and style in every stitch</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <img
//                   alt="Thumbnail"
//                   className="aspect-square rounded-lg object-cover"
//                   height="200"
//                   src="/placeholder.svg"
//                   width="200"
//                 />
//               </CardContent>
//               <CardFooter>
//                 <div className="grid gap-1 text-sm">
//                   <p className="flex items-center gap-2">
//                     <PackageIcon className="h-4 w-4" />
//                     SKU: #345674
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <PackageIcon className="h-4 w-4" />
//                     Category: Apparel
//                   </p>
//                 </div>
//                 <div className="flex items-center justify-between mt-4">
//                   <div className="text-2xl font-semibold">$59.99</div>
//                   <Button size="sm">Edit</Button>
//                 </div>
//               </CardFooter>
//             </Card>
//             <Card className="flex flex-col gap-2">
//               <CardHeader className="pb-0">
//                 <CardTitle className="text-base">Retro Gaming Console</CardTitle>
//                 <CardDescription className="text-sm">Relive the golden age of video games</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <img
//                   alt="Thumbnail"
//                   className="aspect-square rounded-lg object-cover"
//                   height="200"
//                   src="/placeholder.svg"
//                   width="200"
//                 />
//               </CardContent>
//               <CardFooter>
//                 <div className="grid gap-1 text-sm">
//                   <p className="flex items-center gap-2">
//                     <PackageIcon className="h-4 w-4" />
//                     SKU: #345675
//                   </p>
//                   <p className="flex items-center gap-2">
//                     <PackageIcon className="h-4 w-4" />
//                     Category: Electronics
//                   </p>
//                 </div>
//                 <div className="flex items-center justify-between mt-4">
//                   <div className="text-2xl font-semibold">$199.99</div>
//                   <Button size="sm">Edit</Button>
//                 </div>
//               </CardFooter>
//             </Card>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

// function BellIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
//       <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
//     </svg>
//   )
// }


// function HomeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//       <polyline points="9 22 9 12 15 12 15 22" />
//     </svg>
//   )
// }


// function Package2Icon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
//       <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
//       <path d="M12 3v6" />
//     </svg>
//   )
// }


// function PackageIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m7.5 4.27 9 5.15" />
//       <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
//       <path d="m3.3 7 8.7 5 8.7-5" />
//       <path d="M12 22V12" />
//     </svg>
//   )
// }


// function SearchIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   )
// }


// function ShoppingCartIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="8" cy="21" r="1" />
//       <circle cx="19" cy="21" r="1" />
//       <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
//     </svg>
//   )
// }


// function UsersIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   )
// }
