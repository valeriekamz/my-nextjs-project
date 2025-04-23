"use client";
import {
  ArrowRight,
  MessageSquare,
  Phone,
  Mail,
  Store,
  Monitor,
  Users,
  BookOpen,
  Coins,
  Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MagicButton from "@/components/shadcn/MagicButton";
import { CardSpotlight } from "@/components/shadcn/Spotlight";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Hero />

      {/* Hero Section */}
      {/* <section className="bg-black-100 pt-24 md:pt-32 pb-16 md:pb-24 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Tired of support that sucks? Get a team your customers actually
              love.
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              We scale your support with trained, empathetic agents — no hiring,
              no stress, just happy customers.
            </p>
            <div className="mt-8">
              <Button size="lg" className="text-lg px-8">
                Book a free intro call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* How It Works */}

      <div className="relative bg-black-100 overflow-hidden">
        <BackgroundBeams />
        <section className="relative z-10 pt-16 pb-16">
          <div className="container mx-auto px-4 ">
            <h2 className="text-4xl font-bold text-center mb-16">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: <MessageSquare className="h-8 w-8 text-primary" />,
                  title: "1. Connect With Us",
                  desc: "Book a quick discovery call to explore how we can best support your team.",
                },
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  title: "2. Meet Your Team",
                  desc: "We assign experts matched to your needs, goals, and communication style.",
                },
                {
                  icon: <ArrowRight className="h-8 w-8 text-primary" />,
                  title: "3. Launch Support",
                  desc: "We integrate seamlessly and start supporting your customers right away.",
                },
              ].map((step, idx) => (
                <BackgroundGradient
                  key={idx}
                  containerClassName="rounded-2xl"
                  className="rounded-3xl hover:shadow-xl transition duration-300"
                >
                  <div className="rounded-2xl bg-gray-200 p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-5 bg-primary/10 rounded-xl flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </BackgroundGradient>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* <div className="bg-black-100">
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Get in Touch</h3>
                <p className="text-muted-foreground">
                  Schedule a quick discovery call to talk about your needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  2. Meet Your Team
                </h3>
                <p className="text-muted-foreground">
                  We handpick trained agents aligned with your brand voice.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  3. Launch Support
                </h3>
                <p className="text-muted-foreground">
                  We integrate seamlessly and start supporting your customers
                  right away.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div> */}

      {/* Who It's For */}
      <section className="py-16 bg-black-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Who It&apos;s For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-muted/30 p-8 rounded-lg">
              <Store className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ecommerce Stores</h3>
              <p className="text-muted-foreground">
                Handle volume during peak times without the hiring headache
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <Monitor className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">SaaS Founders</h3>
              <p className="text-muted-foreground">
                Focus on your product, we'll handle the support tickets
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Online Coaches</h3>
              <p className="text-muted-foreground">
                Keep your clients feeling seen and heard
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <BookOpen className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Info Product Creators
              </h3>
              <p className="text-muted-foreground">
                Deliver A+ support to your course buyers
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <Coins className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Crypto Projects</h3>
              <p className="text-muted-foreground">
                Handle Discord, Telegram, or email support
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <Globe2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web3 Startups</h3>
              <p className="text-muted-foreground">
                Comprehensive support across all channels
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Support Channels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Chat Support</h3>
              <p className="text-muted-foreground">
                Instant answers during business hours
              </p>
            </div>
            <div className="text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-muted-foreground">
                Detailed, helpful responses within 24h
              </p>
            </div>
            <div className="text-center">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
              <p className="text-muted-foreground">
                Direct line for urgent or high-value clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CardSpotlight>
        <section className="min-h-[50vh] bg-black-100 text-primary-foreground flex items-center justify-center px-4">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Scale Your Support?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let&apos;s talk about how LoopDesk can help your business grow
              </p>
              <a href="#about" className="block mt-8">
                <MagicButton title="Book a free intro call" />
              </a>
            </div>
          </div>
        </section>
      </CardSpotlight>

      <Footer />
    </div>
  );
}
