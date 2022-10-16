# chen-can.github.io
docker run -it --env-file=.env -e "CONFIG=$(cat /Users/chencan/Documents/demo/gitee/chencan123/config.json | jq -r tostring)" algolia/docsearch-scraper