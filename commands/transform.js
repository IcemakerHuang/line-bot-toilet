// 參考資料: https://gist.github.com/gooin/c877f7a198db44960fa9e73d4fb67ef2

// 经纬度转度分秒

function transformDMS(degree, direction) {
	var D = plusZeroAtHead(Math.floor(degree))
	var M = plusZeroAtHead(Math.floor((degree - D) * 60))
	var S = plusZeroAtHead(Math.floor(((degree - D) * 60 - M) * 60))
	var result = D + '°' + M + '′' + S + '″'

	// 如果是个位数， 则在首位加 0
	function plusZeroAtHead(num) {
		if (num > -10 && num < 0) {
			num = '-0' + Math.abs(num)
		}
		if (num > 0 && num < 10) {
			return '0' + num
		}
		return num
	}

	if (direction === 'lon') {
		D > 0 ? (result += 'E') : (result += 'W')
		return result
	}
	if (direction === 'lat') {
		D > 0 ? (result += 'N') : (result += 'S')
		return result
	}
	return result
}

var lon = 107.631131
var lat = 29.2331231
var lonDMS = transformDMS(lon, 'lon')
var latDMS = transformDMS(lat, 'lat')

console.log(lonDMS) // 107°44′35″E
console.log(latDMS) // 29°14′17″N

/**
    經緯度 → 度分秒(假設有個緯度是23.12345)度數 : 整數的部分23 這個就是轉換後的度數(°)
    分數 : 小數的部分0.12345 * 60 = 7.407 ，取整數的部分，因此 7(')就是轉換後的分數
    秒數 : 分數計算後的小數部分，也就是0.407 * 60 = 24.42，因此24.42(")就是轉換後的秒數

    因此23.12345轉換後就是23° 7' 24.42"

    度分秒 → 經緯度(假設有個度數是23° 7' 24.42")轉換公式 : x度 y分 z秒 = x + y/60 + z/3600 度
    (23) + (7/60) + (24.42/3600) = 23 + 0.11666.... + 0.00678333.... = 23.123443....

    https://lawrencetech.blogspot.com/2011/12/gps_28.html
    
 */
