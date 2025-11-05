export function createBlogHeroData(allWorks, allPosts, directusToken) {
  return {
    filter: "all",
    industryFilter: "all",
    searchQuery: "",
    allWorks: allWorks,
    allPosts: allPosts,
    searchResults: { works: [], posts: [] },
    isSearching: false,
    hasSearched: false,
    directusToken: directusToken,
    currentPage: 1,
    itemsPerPage: 6,

    industryIcons: {
      all: '<g><path d="M14 4.66667H10.6667V14.6667H14.6667V5.33333ZM12 10H13.3333V8.66667H12V10ZM12 12.6667H13.3333V11.3333H12V12.6667ZM12 7.33333H13.3333V6H12V7.33333Z" fill="currentColor"/></g>',
      "Urban and Government":
        '<g><path d="M2.66667 8.66667H4.66667V10H2.66667V8.66667ZM6 10H8V8.66667H6V10ZM2.66667 12.6667H4.66667V11.3333H2.66667V12.6667ZM6 12.6667H8V11.3333H6V12.6667ZM2.66667 4.66667H4.66667V3.33333H2.66667V4.66667ZM6 4.66667H8V3.33333H6V4.66667ZM2.66667 7.33333H4.66667V6H2.66667V7.33333ZM6 7.33333H8V6H6V7.33333ZM16 5.33333V16H0V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L8.66667 0C9.1971 0 9.70581 0.210714 10.0809 0.585786C10.456 0.960859 10.6667 1.46957 10.6667 2V3.33333H14C14.5304 3.33333 15.0391 3.54405 15.4142 3.91912C15.7893 4.29419 16 4.8029 16 5.33333ZM9.33333 2C9.33333 1.82319 9.2631 1.65362 9.13807 1.5286C9.01305 1.40357 8.84348 1.33333 8.66667 1.33333H2C1.82319 1.33333 1.65362 1.40357 1.5286 1.5286C1.40357 1.65362 1.33333 1.82319 1.33333 2V14.6667H9.33333V2ZM14.6667 5.33333C14.6667 5.15652 14.5964 4.98695 14.4714 4.86193C14.3464 4.7369 14.1768 4.66667 14 4.66667H10.6667V14.6667H14.6667V5.33333ZM12 10H13.3333V8.66667H12V10ZM12 12.6667H13.3333V11.3333H12V12.6667ZM12 7.33333H13.3333V6H12V7.33333Z" fill="currentColor"/></g>',
      Military:
        '<g><path d="M11 6H10V4C10 3.73478 9.89464 3.48043 9.70711 3.29289C9.51957 3.10536 9.26522 3 9 3H7V1.5C7 1.10218 6.84196 0.720644 6.56066 0.43934C6.27936 0.158035 5.89782 0 5.5 0C5.10218 0 4.72064 0.158035 4.43934 0.43934C4.15804 0.720644 4 1.10218 4 1.5V3H2C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V6H0V7H1V12H10V7H11V6ZM5 1.5C5 1.36739 5.05268 1.24021 5.14645 1.14645C5.24021 1.05268 5.36739 1 5.5 1C5.63261 1 5.75979 1.05268 5.85355 1.14645C5.94732 1.24021 6 1.36739 6 1.5V3H5V1.5ZM2 4H9V6H2V4ZM9 11H2V7H9V11Z" fill="currentColor"/></g>',
      Energy:
        '<g><path d="M6.5 0L2 6H5L4.5 12L9 6H6L6.5 0Z" fill="currentColor"/></g>',
      "Disaster Management":
        '<g><path d="M6 0C4.93913 0 3.92172 0.421427 3.17157 1.17157C2.42143 1.92172 2 2.93913 2 4C2 5.5 2 7 0 9C0 10.0609 0.421427 11.0783 1.17157 11.8284C1.92172 12.5786 2.93913 13 4 13C5.0609 13 6.07828 12.5786 6.82843 11.8284C7.57857 11.0783 8 10.0609 8 9C6 7 6 5.5 6 4C6 2.93913 6.42143 1.92172 7.17157 1.17157C7.92172 0.421427 8.93913 0 10 0H6Z" fill="currentColor"/></g>',
      "AI and Data Services":
        '<g><path d="M11 4H9L8 0H4L3 4H1C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5V11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11V5C12 4.73478 11.8946 4.48043 11.7071 4.29289C11.5196 4.10536 11.2652 4 11 4ZM5 1H7L7.78 4H4.22L5 1ZM11 11H1V5H11V11ZM6 6C5.60444 6 5.21776 6.1173 4.88886 6.33706C4.55996 6.55682 4.30362 6.86918 4.15224 7.23463C4.00087 7.60009 3.96126 8.00222 4.03843 8.39018C4.1156 8.77814 4.30608 9.13451 4.58579 9.41421C4.86549 9.69392 5.22186 9.8844 5.60982 9.96157C5.99778 10.0387 6.39991 9.99913 6.76537 9.84776C7.13082 9.69638 7.44318 9.44004 7.66294 9.11114C7.8827 8.78224 8 8.39556 8 8C8 7.46957 7.78929 6.96086 7.41421 6.58579C7.03914 6.21071 6.53043 6 6 6ZM6 9C5.80222 9 5.60888 8.94135 5.44443 8.83147C5.27998 8.72159 5.15181 8.56541 5.07612 8.38268C5.00043 8.19996 4.98063 7.99889 5.01921 7.80491C5.0578 7.61093 5.15304 7.43275 5.29289 7.29289C5.43275 7.15304 5.61093 7.0578 5.80491 7.01921C5.99889 6.98063 6.19996 7.00043 6.38268 7.07612C6.56541 7.15181 6.72159 7.27998 6.83147 7.44443C6.94135 7.60888 7 7.80222 7 8C7 8.26522 6.89464 8.51957 6.70711 8.70711C6.51957 8.89464 6.26522 9 6 9Z" fill="currentColor"/></g>',
      Agriculture:
        '<g><path d="M6 0C4 0 2 1 2 3C2 4 2 5 1 6C1 8 3 9 3 11V12H9V11C9 9 11 8 11 6C10 5 10 4 10 3C10 1 8 0 6 0ZM8 11H4V10H8V11ZM10 6C10 7.5 8.5 8.5 8 10H4C3.5 8.5 2 7.5 2 6C3 5 3 4 3 3C3 1.5 4.5 1 6 1C7.5 1 9 1.5 9 3C9 4 9 5 10 6Z" fill="currentColor"/></g>',
      Telecommunication:
        '<g><path d="M11 8H10V3C10 2.73478 9.89464 2.48043 9.70711 2.29289C9.51957 2.10536 9.26522 2 9 2H7V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V8H1C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9V11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11V9C12 8.73478 11.8946 8.48043 11.7071 8.29289C11.5196 8.10536 11.2652 8 11 8ZM3 3H9V8H3V3ZM11 11H1V9H11V11Z" fill="currentColor"/></g>',
    },

    getIndustryIcon(industry) {
      return this.industryIcons[industry] || this.industryIcons["all"];
    },

    get uniqueIndustries() {
      const allBlogs = [...this.allWorks, ...this.allPosts];
      const topics = allBlogs
        .map((blog) => blog.topic)
        .filter((topic) => topic);
      return ["all", ...new Set(topics)];
    },

    get allFilteredBlogs() {
      if (this.hasSearched && this.searchQuery.trim() !== "") {
        const searchWorks = this.searchResults.works.map((work) => ({
          thumbnail: "https://panel.braga.co.id/panel/assets/" + work.thumbnail,
          topic: work.topic,
          date_created: new Date(work.date_created).toLocaleDateString(
            "en-US",
            { year: "numeric", month: "short", day: "numeric" }
          ),
          title: work.work_title,
          desc: work.synopsis,
          href: "/blog/case-study/" + work.slug + "/",
          type: "work",
        }));
        const searchPosts = this.searchResults.posts.map((post) => ({
          thumbnail: "https://panel.braga.co.id/panel/assets/" + post.thumbnail,
          topic: post.topic,
          date_created: new Date(post.date_created).toLocaleDateString(
            "en-US",
            { year: "numeric", month: "short", day: "numeric" }
          ),
          title: post.title,
          desc: post.synopsis,
          href: "/blog/post/" + post.slug + "/",
          type: "post",
        }));

        let results = [];
        if (this.filter === "all") {
          results = [...searchWorks, ...searchPosts];
        } else if (this.filter === "work") {
          results = searchWorks;
        } else if (this.filter === "post") {
          results = searchPosts;
        }

        if (this.industryFilter !== "all") {
          results = results.filter(
            (blog) => blog.topic === this.industryFilter
          );
        }
        return results;
      }

      let results = [];
      if (this.filter === "all") {
        results = [...this.allWorks, ...this.allPosts];
      } else if (this.filter === "work") {
        results = this.allWorks;
      } else if (this.filter === "post") {
        results = this.allPosts;
      }

      if (this.industryFilter !== "all") {
        results = results.filter((blog) => blog.topic === this.industryFilter);
      }
      return results;
    },

    get totalPages() {
      return Math.ceil(this.allFilteredBlogs.length / this.itemsPerPage);
    },

    get filteredBlogs() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.allFilteredBlogs.slice(start, end);
    },

    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    async performSearch() {
      if (this.searchQuery.trim() === "") {
        this.searchResults = { works: [], posts: [] };
        this.hasSearched = false;
        this.currentPage = 1;
        return;
      }

      this.isSearching = true;
      this.currentPage = 1;
      try {
        const worksFilter = JSON.stringify({
          _and: [
            { status: { _eq: "published" } },
            {
              _or: [
                { work_title: { _contains: this.searchQuery } },
                { synopsis: { _contains: this.searchQuery } },
                { topic: { _contains: this.searchQuery } },
              ],
            },
          ],
        });

        const postsFilter = JSON.stringify({
          _and: [
            { status: { _eq: "published" } },
            {
              _or: [
                { title: { _contains: this.searchQuery } },
                { synopsis: { _contains: this.searchQuery } },
                { topic: { _contains: this.searchQuery } },
              ],
            },
          ],
        });

        const worksParams = new URLSearchParams({
          fields: "*",
          sort: "-date_created",
          filter: worksFilter,
        });

        const postsParams = new URLSearchParams({
          fields: "*",
          sort: "-date_created",
          filter: postsFilter,
        });

        const [worksResponse, postsResponse] = await Promise.all([
          fetch("https://panel.braga.co.id/panel/items/works?" + worksParams, {
            headers: { Authorization: "Bearer " + this.directusToken },
          }),
          fetch("https://panel.braga.co.id/panel/items/posts?" + postsParams, {
            headers: { Authorization: "Bearer " + this.directusToken },
          }),
        ]);

        const [worksJson, postsJson] = await Promise.all([
          worksResponse.json(),
          postsResponse.json(),
        ]);

        this.searchResults = {
          works: worksJson.data || [],
          posts: postsJson.data || [],
        };
        this.hasSearched = true;
      } catch (error) {
        console.error("Search error:", error);
        this.searchResults = { works: [], posts: [] };
        this.hasSearched = false;
      } finally {
        this.isSearching = false;
      }
    },
  };
}
