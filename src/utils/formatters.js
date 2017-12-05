export const formatGraphContent = graphContent => ({
    id: graphContent.id || null,
    html: graphContent.html || null,
    ...graphContent.frontmatter,
});

export const formatTalkWithSpeakers = (talk, speakers) => ({
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

export const formatSpeakerWithTalksAndDojos = (speaker, talks, dojos) => ({
    ...formatGraphContent(speaker),
    talks: talks
        .map(talk => formatGraphContent(talk.node))
        .filter(talk =>
            talk.speakers.find(sp => sp === speaker.frontmatter.slug),
        ),
    dojos: dojos
        .map(dojo => formatGraphContent(dojo.node))
        .filter(dojo =>
            dojo.craftsmen.find(
                craftsman => craftsman === speaker.frontmatter.slug,
            ),
        ),
});
