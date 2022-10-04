import { useMemo } from "react";

export const useSortedPosts = (posts, sort="title", type="az") => {
    const sortedPosts = useMemo(() => {
        if (sort && posts) {
            let forTitle = (a, b) => a[sort].localeCompare(b[sort]),
                forPrice = (a, b) => a[sort].replace(/[^0-9]/g, '') - b[sort].replace(/[^0-9]/g, '');
            posts = [...posts].sort((a, b) => type == "za" || type == "az" ? forTitle(a, b) : forPrice(a, b));
            if (type == "za" || type == "down") posts.reverse();
        }
        return posts;
    }, [posts, type])
    return sortedPosts;
}

export const usePosts = (posts, sort="title", type="az", query = "") => {
    const sortedPosts = useSortedPosts(posts, sort, type);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}