import cart from "../assets/icons/cart-shopping-solid.svg";

export function Navbar() {
    return (
        <div className="shadow">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                <a className="btn btn-ghost text-xl">Brandname</a>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered p-2 m-2 w-24 md:w-auto rounded-full bg-slate-200" />
                </div>
                <div className="flex justify-between gap-4">
                    <img className="max-w-5 m-2" src={cart} alt="cart" />
                    <div className="rounded-full bg-zinc-700 p-2 font-semibold text-white">User</div>
                </div>
            </div>
        </div>

//          {/* <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
//              <li>
//                  <a className="justify-between" href={"http://localhost:5173/signin"}>
//                      Profile
//                  </a>
//              </li>
//              <li><a>Settings</a></li>
//              <li><a>Logout</a></li>
//          </ul> */}
  
    )
};


