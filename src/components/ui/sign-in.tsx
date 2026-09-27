import * as React from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";

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
  onSteamSignIn?: () => void;
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
  onSteamSignIn,
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

          <div className="grid grid-cols-1 gap-2">
            {/* Google OAuth Option */}
            <button
              type="button"
              onClick={onGoogleSignIn}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent text-foreground h-10 py-2 px-4 w-full cursor-pointer"
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" width="24" height="24" xmlns="http://w3.org">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </button>

            {/* Official Boxicons Gradient Steam Button */}
            <button
              type="button"
              onClick={onSteamSignIn}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent text-foreground h-10 py-2 px-4 w-full cursor-pointer"
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" width="24" height="24" xmlns="http://w3.org">
                <defs>
                  <linearGradient id="steamBrandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#101923" />
                    <stop offset="100%" stopColor="#213a51" />
                  </linearGradient>
                </defs>
                <path 
                  d="M12 .008C5.384.008 0 5.387 0 12.006c0 5.86 4.214 10.741 9.8 11.75l2.215-5.41c-.34-.141-.65-.333-.923-.564l-3.774-2.612a4.12 4.12 0 0 1-.271-1.226c0-.244.03-.472.073-.706l3.864-2.673A4.116 4.116 0 0 1 15.112 6.5a4.14 4.14 0 0 1 4.14 4.133 4.14 4.14 0 0 1-4.14 4.134 4.114 4.114 0 0 1-2.146-.366l-2.72 3.811a4.115 4.115 0 0 1-2.036 2.235l-5.4 2.181C2.302 22.19 0 17.373 0 12.006 0 5.385 5.385 0 12.001 0c6.621 0 12.002 5.385 12.002 12.006 0 6.521-5.207 11.83-11.674 11.994l-2.115-5.18c.45-.27.774-.693.922-1.189l3.774-2.61a3.834 3.834 0 0 0 1.58-2.385l5.389-.006c.045-.232.076-.46.076-.704 0-2.287-1.854-4.142-4.141-4.142-2.164 0-3.931 1.658-4.119 3.771l-3.864 2.673a4.17 4.17 0 0 1-.272 1.226zm3.112 8.784a1.442 1.442 0 1 0 0 2.885 1.442 1.442 0 0 0 0-2.885z" 
                  fill="url(#steamBrandGradient)" 
                />
              </svg>
              Continue with Steam
            </button>
          </div>

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
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold leading-none text-foreground truncate">
                          {testimonial.name}
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-0.5 truncate">
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
