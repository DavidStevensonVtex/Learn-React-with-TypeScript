// Listing 9.11 Define types: PostData, NewPostData and SavedPostData

export type PostData = {
    id: string;
    title: string;
    description: string;
};

export type NewPostData = {
    title: string;
    description: string;
};

export type SavedPostData = {
    id: string;
};
