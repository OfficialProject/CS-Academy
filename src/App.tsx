import { SignInPage, type Testimonial } from "@/components/ui/sign-in";
import { useEffect } from "react";

const testimonials: Testimonial[] = [
  {
    avatarSrc: "https://unsplash.com",
    name: "Alex Morgan",
    handle: "@alexmorgan",
    text: "The experience is incredibly smooth.",
  },
  {
    avatarSrc: "https://unsplash.com",
    name: "Sarah Chen",
    handle: "@sarahchen",
    text: "Everything I need is right where I expect it.",
  },
  {
    avatarSrc: "https://unsplash.com",
    name: "Jordan Lee",
    handle: "@jordanlee",
    text: "A genuinely clean and effortless experience.",
  },
];

function App() {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.height = "100%";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    
    return () => {
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-background text-foreground flex flex-col">
      <div className="flex-1 h-full w-full overflow-hidden">
        <SignInPage
          title={<span>Welcome <span className="text-violet-400">back.</span></span>}
          description="Sign in to continue to your account."
          heroImageSrc="https://unsplash.com"
          testimonials={testimonials}
          onSignIn={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log("Sign in submitted");
          }}
          onGoogleSignIn={() => console.log("Google sign in selected")}
          onResetPassword={() => console.log("Reset password selected")}
          onCreateAccount={() => console.log("Create account selected")}
        />
      </div>
    </div>
  );
}

export default App;
