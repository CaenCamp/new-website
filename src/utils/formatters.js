export const formatGraphContent = graphContent => ({
    id: graphContent.id || null,
    html: graphContent.html || null,
    ...graphContent.frontmatter,
});

export const formatTalkWithSpeakers = (talk, speakers = []) => ({
    ...formatGraphContent(talk),
    speakers: talk.frontmatter.speakers
        .map(speaker => {
            const findedSpeaker = speakers.find(
                sp => sp.node.frontmatter.slug === speaker,
            );
            if (findedSpeaker) {
                return formatGraphContent(findedSpeaker.node);
            } else {
                return null;
            }
        })
        .filter(sp => sp !== null),
});

export const formatLightningWithSpeakers = (lightning, speakers = []) => ({
    ...formatGraphContent(lightning),
    speakers: lightning.frontmatter.speakers
        .map(speaker => {
            const findedSpeaker = speakers.find(
                sp => sp.node.frontmatter.slug === speaker,
            );
            if (findedSpeaker) {
                return formatGraphContent(findedSpeaker.node);
            } else {
                return null;
            }
        })
        .filter(sp => sp !== null),
});

export const formatTalkWithLightningsAndSpeakers = (
    talk,
    speakers = [],
    lightnings = [],
) => {
    const currentTalk = formatGraphContent(talk);
    const currentLightnings = lightnings
        .map(lightning => {
            if (
                talk.frontmatter.edition === lightning.node.frontmatter.edition
            ) {
                return formatLightningWithSpeakers(lightning.node, speakers);
            } else {
                return null;
            }
        })
        .filter(lt => lt !== null);
    const tags = currentLightnings.length
        ? [
              ...currentTalk.tags,
              ...currentLightnings.reduce((acc, lightning) => {
                  return [...acc, ...lightning.tags];
              }, []),
          ]
        : currentTalk.tags;
    const currentSpeakers = talk.frontmatter.speakers
        .map(speaker => {
            const findedSpeaker = speakers.find(
                sp => sp.node.frontmatter.slug === speaker,
            );
            if (findedSpeaker) {
                return formatGraphContent(findedSpeaker.node);
            } else {
                return null;
            }
        })
        .filter(sp => sp !== null);
    const globalSpeakers = currentLightnings.length
        ? [
              ...currentSpeakers,
              ...currentLightnings.reduce((acc, lightning) => {
                  return [...acc, ...lightning.speakers];
              }, []),
          ]
        : currentTalk.tags;
    return {
        ...currentTalk,
        lightnings: currentLightnings,
        speakers: currentSpeakers,
        globalTags: Array.from(new Set(tags)),
        globalSpeakers,
    };
};

export const formatDojoWithCraftsmen = (dojo, craftsmen = []) => ({
    ...formatGraphContent(dojo),
    craftsmen: dojo.frontmatter.craftsmen
        .map(craftsman => {
            const findedCraftsman = craftsmen.find(
                sp => sp.node.frontmatter.slug === craftsman,
            );
            if (findedCraftsman) {
                return formatGraphContent(findedCraftsman.node);
            } else {
                return null;
            }
        })
        .filter(cm => cm !== null),
});

export const formatSpeakerWithTalksLightningsAndDojos = (
    speaker,
    talks = [],
    lightning = [],
    dojos = [],
) => ({
    ...formatGraphContent(speaker),
    talks: talks
        .map(talk => formatGraphContent(talk.node))
        .filter(talk =>
            talk.speakers.find(sp => sp === speaker.frontmatter.slug),
        ),
    lightning: lightning
        .map(lightning => formatGraphContent(lightning.node))
        .filter(lightning =>
            lightning.speakers.find(sp => sp === speaker.frontmatter.slug),
        ),
    dojos: dojos
        .map(dojo => formatGraphContent(dojo.node))
        .filter(dojo =>
            dojo.craftsmen.find(
                craftsman => craftsman === speaker.frontmatter.slug,
            ),
        ),
});

export const formatMeetup = rawMeetup => {
    let meetup = null;

    if (rawMeetup === null) {
        return meetup;
    }

    rawMeetup.edges.map(edge => {
        meetup = edge.node;
    });

    return meetup;
};
