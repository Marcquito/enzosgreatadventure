import React from "react";
import { connect, styled } from "frontity";

const CommentsList = ({ state, libraries, postId }) => {
    const data = state.source.get(`@comments/${postId}`);
    const Html2React = libraries.html2react.Component;

    return (
        <>
            <Container>
                <h3 className="comment-section-title">Comments</h3>
                {data.items.map(({ id }) => {
                    return (
                        <>
                            <Comment>
                                <div className="author-info">
                                    <div className="author-avatar">
                                        <img src={state.source.comment[id].author_avatar_urls['96']}/>
                                    </div>
                                    <div className="author-name">
                                        {state.source.comment[id].author_name || "Anonymous"}
                                    </div>
                                </div>
                                <CommentContent>
                                    <Html2React 
                                    html={state.source.comment[id].content.rendered}
                                    />
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
        margin-right: 10px;
        width: 46px;
        height: 46px;
    }
    .author-name{
        margin-top: 10px;
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
    
`;