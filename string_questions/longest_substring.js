var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0;
    } else if (s.length === 1) {
        return 1;
    }

    const st = new Set();
    let left = 0;
    let maxSize = 0
    for (let i = 0; i <= s.length - 1; i++) {
        while (st.has(s[i])) {
            st.delete(s[left]);

            left++;
        }

        st.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1);
    }


    return maxSize;

};

lengthOfLongestSubstring("abcabcbb")