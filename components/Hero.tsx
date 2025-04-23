import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "@/components/shadcn/Spotlight";
import MagicButton from "./shadcn/MagicButton";

const Hero = () => {
  return (
    <div className="relative pt-16 group">
      <CardSpotlight>
        <section className="pt-8 md:pt-16 pb-8 md:pb-6 flex flex-col items-center justify-center min-h-screen px-4">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-white-200 text-4xl md:text-6xl font-bold tracking-tight">
                Tired of <span className="text-green-200">support</span> that sucks? Get a team your customers actually
                <span className="text-green-200"> love</span>
              </h1>
              <p className="mt-6 text-2xl text-muted-foreground">
                We scale your support with trained, empathetic agents — no
                hiring, no stress, just happy customers.
              </p>

              <a href="#about" className="block mt-8">
                <MagicButton
                title="Book a free intro call"
                />
              </a>

              {/* <div className="mt-8">
                <Button size="lg" className="text-lg px-8">
                  Book a free intro call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div> */}
              
            </div>
          </div>
        </section>
      </CardSpotlight>
    </div>
  );
};

export default Hero;
