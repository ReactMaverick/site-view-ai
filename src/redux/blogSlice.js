import { BLOGS } from '@/values/Constants/Urls';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const getAllBlogs = createAsyncThunk('/getAllBlogs', async () => {
    try {
        const response = await fetch(BLOGS);
        if (!response.ok) {
            throw new Error('Server error!');
        }
        const data = await response.json();
        console.log("Blogs Data:", data);
        return data
    } catch (error) {
        throw new Error('Error in fetching Blogs!');
    }
})

export const getBlogById = createAsyncThunk('/getBlogById', async (id) => {
    try {
        const response = await fetch(`${BLOGS}/${id}`);
        if (!response.ok) {
            throw new Error('Server error!');
        }
        const data = await response.json();
        console.log("getBlogById Data:", data);
        return data
    }
    catch (error) {
        throw new Error('Error in fetching Blog!');
    }
})

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
       blogs: [],
       blogsLoading: true,
    },
    reducers: {


    },
    extraReducers: (builder) => {
        builder.addCase(getAllBlogs.pending, (state) => {
            state.blogsLoading = true;
        });
        builder.addCase(getAllBlogs.fulfilled, (state, action) => {
            console.log("Fetched Blogs:", action.payload);
            state.blogs = action.payload.blogs;
            state.blogsLoading = false;
        });
        builder.addCase(getAllBlogs.rejected, (state) => {
            state.blogsLoading = false;
        });
    }
})

// export const { increment, setFlashCardsEmpty } = counterSlice.actions
export const SelectBlogs = (state) => state.blog.blogs;
export const SelectBlogsLoading = (state) => state.blog.blogsLoading;
export default blogSlice.reducer