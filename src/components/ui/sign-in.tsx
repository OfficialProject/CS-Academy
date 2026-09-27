import * as React from "react";
import { Globe, Eye, EyeOff, Loader2 } from "lucide-react";

export interface Testimonial {
  avatarSrc: string;
  name: string;
  handle: string;
  text: string;
}

interface SignInPageProps {
  title?: React.ReactNode;
  description?: string;
  heroImageSrc?: string;
  testimonials?: Testimonial[];
  isLoading?: boolean;
  onSignIn?: (event: React.FormEvent<HTMLFormElement>) => void;
  onGoogleSignIn?: () => void;
  onResetPassword?: () => void;
  onCreateAccount?: () => void;
}

export function SignInPage({
  title = "Welcome back",
  description = "Sign in to continue to your account.",
  heroImageSrc,
  testimonials = [],
  isLoading = false,
  onSignIn,
  onGoogleSignIn,
  onResetPassword,
  onCreateAccount,
}: SignInPageProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  React.useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 bg-background text-foreground overflow-hidden">
      
      {/* Left side Form Area */}
      <div className="flex flex-col justify-center px-4 py-6 sm:px-6 md:px-12 xl:px-24 h-full overflow-y-auto">
        <div className="mx-auto w-full max-w-sm space-y-5">
          
          <div className="space-y-1.5">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h1>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>

          <form onSubmit={onSignIn} className="space-y-3.5">
            <div className="space-y-1">
              <label className="text-xs font-medium leading-none text-foreground/80">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium leading-none text-foreground/80">
                  Password
                </label>
                <button
                  type="button"
                  onClick={onResetPassword}
                  className="text-xs font-medium text-violet-500 hover:text-violet-600 dark:text-violet-400"
                >
                  Reset password
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter your password"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
              />
              <label htmlFor="remember" className="text-xs font-medium leading-none text-muted-foreground cursor-pointer">
                Keep me signed in
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-full cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="relative py-1">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-input" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase">
              <span className="bg-background px-2 text-muted-foreground tracking-wider">
                Or continue with
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onGoogleSignIn}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent text-foreground h-10 w-full cursor-pointer"
          >
            <Globe className="mr-2 h-4 w-4 text-red-500" />
            Continue with Google
          </button>

          <p className="text-center text-xs text-muted-foreground pt-1">
            New to our platform?{" "}
            <button
              type="button"
              onClick={onCreateAccount}
              className="underline underline-offset-4 text-violet-500 hover:text-violet-600 font-medium"
            >
              Create Account
            </button>
          </p>

        </div>
      </div>

      {/* Right side Hero / Testimonial Area */}
      <div className="hidden md:block relative h-full bg-muted overflow-hidden">
        {heroImageSrc && (
          <img
            src={heroImageSrc}
            alt="Sign In Background"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

        {testimonials.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-6 xl:p-10">
            <div className="relative h-[120px] w-full max-w-sm mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform flex flex-col justify-end ${
                    index === currentTestimonial ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <div className="rounded-xl border border-input bg-background/70 backdrop-blur-md p-4 shadow-md">
                    <div className="flex items-center space-x-3 mb-2">
                      <img
                        src={testimonial.avatarSrc}
                        alt={testimonial.name}
                        className="h-8 w-8 rounded-full object-cover border border-input"
                      />
                      <div>
                        <p className="text-xs font-semibold leading-none text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">
                          {testimonial.handle}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-foreground/90 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
