import logo from "@/assets/icon.svg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 m-5">
      <div className="container mx-auto px-4">
        <div className="flex md:grid-cols-4 gap-8 items-center justify-left">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" width="30" height="30" />
              <span className="text-xl font-bold text-foreground">
                InkVision
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Challenge yourself with your Hand Writing.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>Made by Experts.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
