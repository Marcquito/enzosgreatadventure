import React from "react";
import { connect } from "frontity";
import Loading from "../loading";
import { styled } from "frontity";

const CommentsForm = ({ actions, state, postId }) => {
  const form = state.comments.forms[postId];
  return (
    <>
    <EnzosCommentsForm>
        <h3 className="comments-form-title">Leave a Comment 🦴</h3>
        <form className="comments-form"
            onSubmit={(e) => {
            e.preventDefault();
            actions.comments.submit(postId);
            }}
        >
            {/* If the form is submitting, we can show some kind of a loading state */}
            {form?.isSubmitting && <Loading />}
            <label>
            <input
                placeholder="Your Name"
                name="author_name"
                required
                onChange={(e) =>
                actions.comments.updateFields(postId, {
                    authorName: e.target.value
                })
                }
                value={state.comments.forms[postId]?.fields?.authorName || ""}
            />
            {form?.errors?.authorName}
            </label>

            <label>
            <input
                placeholder="Your Email"
                name="author_email"
                required
                onChange={(e) =>
                actions.comments.updateFields(postId, {
                    authorEmail: e.target.value
                })
                }
                value={state.comments.forms[postId]?.fields?.authorEmail || ""}
            />
            {form?.errors?.authorEmail}
            </label>

            <label>
            <textarea className="comment-body"
                name="content"
                required
                placeholder="Your Comment"
                onChange={(e) =>
                actions.comments.updateFields(postId, {
                    content: e.target.value
                })
                }
                value={state.comments.forms[postId]?.fields?.content || ""}
            />
            {/* Show the errors for the individual fields.
                E.g. content of a comment cannot be empty and the email must be valid */}
            {form?.errors?.content}
            </label>

            {/* Show the REST API error messages.
                E.g. "Sorry, you must be logged in to comment." */}
            {form?.errorMessage && <div>ERROR: {form?.errorMessage}</div>}

            {/* If the form was submitted successfully we can show a confirmation */}
            <div>
            {form?.isSubmitted && "The comment was submitted successfully!"}
            </div>
            <button className="comment-submit" type="submit">Post Comment!</button>
        </form>

    </EnzosCommentsForm>
    </>
  );
};

export default connect(CommentsForm);

const EnzosCommentsForm = styled.div`
    background: var(--chakra-colors-primary-700);   
    color: white;
    margin: 40px;
    padding: 40px;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;

    input, textarea{
        width: 100%;
        padding: 10px 20px;
        margin: 10px 0;
        color: #333;

    }
    p{
        text-align: center;
    }
    .comments-form-title{
        font-size: 1.7em;
        text-align: center;
        text-transform: uppercase;
        font-family: var(--chakra-fonts-heading);
        font-weight: var(--chakra-fontWeights-bold);
    }
    .comments-form{
        margin-top: 20px;
    }
    .comment-body{
        height: 150px;
    }
    .comment-submit{
        background: var(--chakra-colors-accent-400);
        border: 1px solid var(--chakra-colors-accent-400);
        width: 100%;
        padding: 10px 20px;
        margin: 10px 0;
        color: #333;
        transition: 0.3s;
    }
    .comment-submit:hover{
        background: transparent;
        color: #ffffff;
    }
`;
