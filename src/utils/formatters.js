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
