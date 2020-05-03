/** * @author: wangyongqi@baidu.com
 * @date: 2020-05-03 00:49:06
 * @last Modified time: 2020-05-03 00:49:06
 */
import SELECT_SUBREDDIT from './actionType';

export const selectSubreddit = subreddit => ({
    type: SELECT_SUBREDDIT,
    subreddit
});
