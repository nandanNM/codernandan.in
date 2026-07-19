import { USER } from "@/data/user";

import { Panel, PanelContent, PanelHeader } from "../panel";
import { BookCallButton } from "./book-call-button";
import { EmailButton } from "./email-button";
import { HelloTitle } from "./hello-title";
import { RichBio } from "./rich-bio";
import { SocialPills } from "./social-pills";

export function HeroIntro() {
  return (
    <Panel id="about">
      <PanelHeader>
        <HelloTitle />
      </PanelHeader>

      <PanelContent className="space-y-5">
        <RichBio />

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <BookCallButton />
          <EmailButton email={USER.email} />
        </div>

        <p className="pt-1">
          Here are my <span className="font-semibold">socials</span>
        </p>

        <SocialPills />
      </PanelContent>
    </Panel>
  );
}
