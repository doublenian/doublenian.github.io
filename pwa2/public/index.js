(function() {
    new Vue ({
        el:'#app',
        data :{
            showLoading: false,
            list: []
        },
        computed:{

        },
        mounted () {
            this.queryData()
        },
        methods:{
            queryData() {
                var url = '/data';
                var cacheData;
                this.showLoading = true
                var remotePromise = this.getApiDataRemote(url);
                
                this.getApiDataFromCache(url).then( data=> {
                    if (data) {
                        this.showLoading = false
                        this.list = data
                        console.log('=====cache Data======')
                        console.log(data)
                    }
                    cacheData = data || {};
                    return remotePromise;
                }).then(data => {
                    if (data && JSON.stringify(data) !== JSON.stringify(cacheData)) {
                        this.showLoading = false
                        this.list = data
                        console.log('======api data=======')
                        console.log(data)
                    }
                }).catch(e=>{
                    console.log(e)
                })
            },
            getApiDataFromCache(url) {
                if ('caches' in window) {
                    return caches.match(url).then(function (cache) {
                        if (!cache) {
                            return;
                        }
                        return cache.json();
                    });
                }
                else {
                    return Promise.resolve();
                }
            },
            getApiDataRemote(url) {
                return fetch(url, {method: 'POST'}).then(response=>{
                    return caches.open('api-0-1-1').then(function (cache) {
                        cache.put('/data', response.clone());
                        return response.json()
                    })
                })
                // return new Promise(function (resolve, reject) {
                //     var xhr = new XMLHttpRequest();
                //     xhr.timeout = 60000;
                //     xhr.onreadystatechange = function () {
                //         var response = {};
                //         if (xhr.readyState === 4 && xhr.status === 200) {
                //             try {
                //                 response = JSON.parse(xhr.responseText);
                //             }
                //             catch (e) {
                //                 response = xhr.responseText;
                //             }
    
                //             resolve(response);
                //         }
                //         else if (xhr.readyState === 4) {
                //             resolve();
                //         }
                //     };
                //     xhr.onabort = reject;
                //     xhr.onerror = reject;
                //     xhr.ontimeout = reject;
                //     xhr.open('GET', url, true);
                //     xhr.send(null);
                // });
            }
        }

    })
})();