import { Node } from '@tiptap/core';
export declare const TWITTER_REGEX_GLOBAL: RegExp;
export declare const TWITTER_REGEX: RegExp;
export declare const isValidTwitterUrl: (url: string) => RegExpMatchArray | null;
export interface TwitterOptions {
    /**
     * Controls if the paste handler for tweets should be added.
     * @default true
     * @example false
     */
    addPasteHandler: boolean;
    HTMLAttributes: Record<string, any>;
    /**
     * Controls if the twitter node should be inline or not.
     * @default false
     * @example true
     */
    inline: boolean;
    /**
     * The origin of the tweet.
     * @default ''
     * @example 'https://tiptap.dev'
     */
    origin: string;
}
/**
 * The options for setting a tweet.
 */
type SetTweetOptions = {
    src: string;
};
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        twitter: {
            /**
             * Insert a tweet
             * @param options The tweet attributes
             * @example editor.commands.setTweet({ src: 'https://x.com/seanpk/status/1800145949580517852' })
             */
            setTweet: (options: SetTweetOptions) => ReturnType;
        };
    }
}
/**
 * This extension adds support for tweets.
 */
export declare const Twitter: Node<TwitterOptions, any>;
export {};
