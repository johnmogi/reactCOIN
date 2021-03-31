export default function Footer(){

    const getCurrentYear = () => new Date().getUTCFullYear();
    return (
        <div className="center">
         all rights reserved John Mogi &copy; {getCurrentYear()}
        </div>
    )
}