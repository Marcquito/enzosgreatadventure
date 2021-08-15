import React from "react";
import { connect, styled } from "frontity";
import { formatDate } from "../helpers";

const CommentsList = ({ state, libraries, postId }) => {
    const data = state.source.get(`@comments/${postId}`);
    const Html2React = libraries.html2react.Component;

    const renderComments = (items) =>
    items.map(({ id, children }) => (
      <Comment key={id}>
        {/* Render replies */}
        {children && renderComments(children)}
      </Comment>
    ));

    return (
        <>
            <Container>
                <h3 className="comment-section-title">Comments</h3>
                {data.items.map(({ id }) => {

                    const authorAvatar      = state.source.comment[id].author_avatar_urls['96'];
                    const authorName        = state.source.comment[id].author_name || "Anonymous";
                    const authorDate        = state.source.comment[id].date;
                    const authorComment     = state.source.comment[id].content.rendered;

                    return (
                        <>
                            <Comment>
                                <div className="author-info">
                                    <div className="author-avatar">
                                        <img src={authorAvatar}/>
                                    </div>
                                    <div className="author-name">
                                        {authorName}<br />
                                        <small>{formatDate(authorDate)}</small>
                                    </div>
                                </div>
                                <CommentContent>
                                    <Html2React html={authorComment} />
                                </CommentContent>
                            </Comment>
                        </>
                    );
                })}
            </Container>
        </>
    );
};

export default connect(CommentsList);

const Container = styled.div`
    margin: 40px;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    width: 92%;

    .comment-section-title{
        font-family: var(--chakra-fonts-heading);
        font-weight: var(--chakra-fontWeights-bold);
        text-transform: uppercase;
        font-size: 1.5em;
        font-weight: 600;
        margin-bottom: 20px;
    }
    .author-info{
        display: flex;
    }
    .author-info img{
        border-radius: var(--chakra-radii-full);
        margin-right: 20px;
        width: 55px;
        height: 55px;
        box-shadow: 0px 0px 25px -7px var(--chakra-colors-accent-400);
        border: 1px solid var(--chakra-colors-accent-400);
    }
    .author-name{

    }
`;

const Comment = styled.div`
    padding: 20px;
    border-bottom: 1px solid #e9f5f2;
    .author-name{
        font-weight: 800;
    }
`;

const CommentContent = styled.div`
    padding: 10px 0;
`;