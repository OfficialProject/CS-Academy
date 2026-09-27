import { SignInPage, type Testimonial } from "@/components/ui/sign-in";

const testimonials: Testimonial[] = [
  {
    avatarSrc:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80",
    name: "Alex Morgan",
    handle: "@alexmorgan",
    text: "The experience is incredibly smooth.",
  },
  {
    avatarSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    name: "Sarah Chen",
    handle: "@sarahchen",
    text: "Everything I need is right where I expect it.",
  },
  {
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
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
        heroImageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=85"
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