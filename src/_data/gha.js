module.exports = function () {
    if (process.env.CI) {
        const run_id = process.env.GITHUB_RUN_ID;
        const run_url = process.env.GITHUB_SERVER_URL + "/" + process.env.GITHUB_REPOSITORY + "/actions/runs/" + run_id;
        const sha = process.env.GITHUB_SHA;
        const sha_tree_url = process.env.GITHUB_SERVER_URL + "/" + process.env.GITHUB_REPOSITORY + "/tree/" + sha;
        return {
            run_id: run_id,
            run_url: run_url,
            commit: sha,
            commit_tree_url: sha_tree_url,
        };
    }

    return {
        run_id: "1234",
        run_url: "foo.com/bar",
        commit: "abc123",
        commit_tree_url: "foo.com/tree/abc123"
    };
};
