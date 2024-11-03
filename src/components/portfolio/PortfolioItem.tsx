import React from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Info } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { PiMagicWandFill } from "react-icons/pi";

export const PortfolioItem = ({ item }: { item: any }) => (
  <div className={`relative col-span-12 md:col-span-6 row-span-1 p-6 rounded-xl overflow-hidden ${item.bgClass}`}>
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
    <div className="relative h-full flex flex-col justify-between z-20 text-white">
      <div>
        <div className="flex flex-row items-center gap-3 mb-4">
          <img src={item.logo} width="44" height="44" alt={`${item.title} logo`} />
          <h3 className="text-2xl md:text-2xl font-bold">{item.title}</h3>
        </div>
        <div>
          <p className="text-lg md:text-xl font-normal text-white mb-1">{item.subtitle}</p>
          <p className="text-md md:text-lg font-light mb-4 text-white/70">{item.description}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center gap-3">
        <div className="flex gap-3">
          {/* <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm"><Info className="w-4 h-4 mr-2" />Info</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto bg-white">
              <DialogHeader>
                <DialogTitle className="text-black text-xl">Project Details:</DialogTitle>
              </DialogHeader>
              <item.DialogContent />
            </DialogContent>
          </Dialog> */}
          {item.demoLink ? (
            <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm"><FiExternalLink className="w-4 h-4 mr-2" />Visit</Button>
            </a>
          ) : (
            <Button variant="outline" size="sm" disabled><FiExternalLink className="w-4 h-4 mr-2" />Soon</Button>
          )}
        </div>

        {item.githubLink ? (
            <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:scale-125 duration-200 w-7 h-7 mr-2" />
        </a>
          ) : null }

      </div>
    </div>
  </div>
);