import ToggleTheme from "./ToggleTheme"

export default function Header() {
    return(
        <nav className="grid grid-cols-3 p-8 items-center">
          <h1 className="text-xl font-semibold dark:text-white ">BucketList Destinations</h1>
          <span className="justify-self-center text-blue-600 font-mono">
            Pick Your BucketList Destination
          </span>
          <ToggleTheme />
        </nav>
    )
}