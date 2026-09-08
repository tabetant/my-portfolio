import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Multimodal Pokedex | Antoine Tabet",
  description: "Deep learning capstone that aligns four Pokemon art styles and names in seven languages inside one shared embedding space, using a LoRA fine tuned SigLIP 2.",
  openGraph: {
    title: "Multimodal Pokedex | Antoine Tabet",
    description: "Deep learning capstone that aligns four Pokemon art styles and names in seven languages inside one shared embedding space, using a LoRA fine tuned SigLIP 2.",
    url: "https://antoinetabet.com/projects/pokedex",
  },
};

export default function PokedexPage() {
  return (
    <CaseStudy
      kicker="Deep Learning Capstone"
      title="Multimodal Pokedex"
      subtitle="One model that recognises a Pokemon species from any of its art styles, from a retro sprite to a modern 3D model, and from its name in seven languages."
      tags={["PyTorch", "SigLIP 2", "LoRA"]}
      github="https://github.com/tabetant/aps360_pokedex"
      stats={[
        { num: "0.94", label: "Zero Shot Accuracy on Modern Art" },
        { num: "0.48 to 0.68", label: "Sprite Accuracy After Tuning" },
        { num: "0.08%", label: "Of 375M Parameters Trained" },
        { num: "23K", label: "Image Pairs, 1,025 Species" },
      ]}
      overview={
        <>
          <p>
            The Multimodal Pokedex is my deep learning capstone. It puts four visual forms of
            a species and its names in seven languages into one shared embedding space: the
            Generation 1 sprite, the Generation 5 sprite, the Generation 9 3D model, and the
            official artwork. A pixel sprite and a French name for the same species end up in
            the same neighbourhood, so any one of them can retrieve the others.
          </p>
          <p>
            I benchmarked the base model zero shot before training anything, which turned out
            to be the most useful decision in the project. SigLIP 2, a vision language model
            that scores images and text against each other, reached 0.94 top 1 accuracy on
            modern official artwork, meaning the correct species ranked first 94 percent of
            the time. On retro sprites it reached 0.48. That gap was the real problem to
            solve: the model had seen a great deal of polished illustration and almost none of
            the low resolution pixel art that defines the early games.
          </p>
          <p>
            Fine tuning with LoRA, or low rank adaptation, trained 0.08 percent of the 375M
            parameters in the model rather than the whole thing. Sprite accuracy rose from
            0.48 to 0.68 with zero forgetting on the styles that were already strong. The
            dataset behind it is 23,000 image pairs covering all 1,025 species, collected
            through PokeAPI, the open Pokemon data service.
          </p>
          <p className="text-zinc-600 text-sm">
            This is an unaffiliated fan research project. Pokemon is property of Nintendo,
            Creatures Inc., and Game Freak.
          </p>
        </>
      }
      features={[
        {
          title: "One Shared Embedding Space",
          desc: "Four art styles per species plus names in seven languages map into a single space, so a retro sprite and a Japanese name for the same species sit next to each other.",
        },
        {
          title: "Zero Shot Benchmark First",
          desc: "Measured the base model before changing it. Modern official artwork reached 0.94 top 1 accuracy, meaning the right species ranked first, while retro sprites reached only 0.48.",
        },
        {
          title: "LoRA Fine Tuning",
          desc: "Low rank adaptation trained 0.08 percent of the 375M parameters in the model, which kept the trainable weights small enough to iterate on quickly.",
        },
        {
          title: "Sprites Without Forgetting",
          desc: "Sprite top 1 accuracy rose from 0.48 to 0.68, and the styles the model already handled well showed no regression after tuning.",
        },
        {
          title: "Dataset Built From PokeAPI",
          desc: "23,000 image pairs across all 1,025 species, pulled and cleaned from PokeAPI so every species carries each of its visual forms alongside its names in seven languages.",
        },
      ]}
      techStack={["Python", "PyTorch", "SigLIP 2", "LoRA", "PokeAPI"]}
      shareTitle="Multimodal Pokedex, a deep learning capstone by Antoine Tabet"
      next={{ href: "/projects/wealtheasy", label: "WealthEasy" }}
    />
  );
}
