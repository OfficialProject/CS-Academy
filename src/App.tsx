import { SignInPage, type Testimonial } from "@/components/ui/sign-in";

const testimonials: Testimonial[] = [
  {
    avatarSrc:
      "https://unsplash.com",
    name: "Alex Morgan",
    handle: "@alexmorgan",
    text: "The experience is incredibly smooth.",
  },
  {
    avatarSrc:
      "https://unsplash.com",
    name: "Sarah Chen",
    handle: "@sarahchen",
    text: "Everything I need is right where I expect it.",
  },
  {
    avatarSrc:
      "https://unsplash.com",
    name: "Jordan Lee",
    handle: "@jordanlee",
    text: "A genuinely clean and effortless experience.",
  },
];

function App() {
  return (
    <main className="min-h-[100dvh] bg-background text-foreground">
      <SignInPage
        title={
          <span>
            Welcome <span className="text-violet-400">back.</span>
          </span>
        }
        description="Sign in to continue to your account."
        heroImageSrc="https://unsplash.com"
        testimonials={testimonials}
        onSignIn={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          console.log("Sign in submitted");
        }}
        onGoogleSignIn={() => {
          console.log("Google sign in selected");
        }}
        onResetPassword={() => {
          console.log("Reset password selected");
        }}
        onCreateAccount={() => {
          console.log("Create account selected");
        }}
      />
    </main>
  );
}

export default App;
