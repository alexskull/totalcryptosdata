module.exports = {
	socketData:function(){
		var _ = require('lodash');
		var Promise = require("bluebird");
		
		return Promise.all([
			ExchangeDataService.gdaxMarketData(),
			ExchangeDataService.bittrexMarketData(),
			ExchangeDataService.coinmarketcapMarketData(),
			ExchangeDataService.bitfinexMarketData(),
			ExchangeDataService.hitbtcMarketData(),
			ExchangeDataService.gateMarketData(),
			ExchangeDataService.kunaMarketData(),
			ExchangeDataService.okexMarketData(),
			ExchangeDataService.binanceMarketData(),
			ExchangeDataService.huobiMarketData(),
			ExchangeDataService.geminiMarketData(),
			ExchangeDataService.krakenMarketData(),
			ExchangeDataService.bitflyerMarketData(),
			ExchangeDataService.bithumbMarketData(),
			ExchangeDataService.bitstampMarketData(),
			ExchangeDataService.bitzMarketData(),
			ExchangeDataService.lbankMarketData(),
			ExchangeDataService.coinoneMarketData(),
			ExchangeDataService.wexMarketData(),
			ExchangeDataService.exmoMarketData(),
			ExchangeDataService.liquiMarketData(),
			ExchangeDataService.korbitMarketData(),
			ExchangeDataService.bitmexMarketData(),
			ExchangeDataService.livecoinMarketData(),
			ExchangeDataService.cexMarketData(),
			ExchangeDataService.kucoinMarketData(),
			ExchangeDataService.cryptopiaMarketData(),
			ExchangeDataService.totalCryptoPricesUsd(),
			ExchangeDataService.totalCryptoPricesPairs(),
			ExchangeDataService.totalCryptosPrice(),
			ExchangeDataService.totalCryptoPricesUsd(10),
			FrontendService.gainers_and_losers(10),
			FrontendService.RSS()
					]
		).then(response => { 
			sails.sockets.blast('exchangeData',{gdax:response[0].data,bittrex:response[1].data, coinmarket:response[2].data,bitfinex:response[3].data,hitbtc:response[4].data,gate:response[5].data,kuna:response[6].data,okex:response[7].data,binance:response[8].data,huobi:response[9].data,gemini:response[10].data,kraken:response[11].data,bitflyer:response[12].data,bithumb:response[13].data,bitstamp:response[14].data,bitz:response[15].data,lbank:response[16].data,coinone:response[17].data,wex:response[18].data,exmo:response[19].data,liqui:response[20].data,korbit:response[21].data,bitmex:response[22].data,livecoin:response[23].data,cex:response[24].data,kucoin:response[25].data,cryptopia:response[26].data,totalcryptospriceusd:response[27].data,totalcryptospricepairs:response[28].data,cryptoData:response[29],topproducts:response[30].data,gainers_losers:response[31].gainers_losers,rss:response[32]});
		}).
		catch(err => { 
			//NO NEED TO SEND SOCKET DATA IN THIS CASE
		});
	},
	
	headerFooterData:function(callBack){
		return Promise.all([
			ExchangeDataService.gdaxMarketData(),
			ExchangeDataService.totalCryptosPrice(),
			ExchangeDataService.totalCryptoPricesUsd(10),
			FrontendService.RSS()
					]
		).then(response => { 
			callBack({gdax:response[0].data,cryptoData:response[1],topproducts:response[2].data,rss:response[3]});
		}).
		catch(err => { 
			callBack({gdax:[],cryptoData:[],topproducts:[],rss:[]});
		});
	},
	
	tabData:function(tab,callBack,count,currency=null){ 
		switch(tab){
			case 'totalcryptospriceusd':
				return Promise.all([
					ExchangeDataService.totalCryptoPricesUsd(count)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});
			break;
			case 'totalcryptospricepairs':
				return Promise.all([
					ExchangeDataService.totalCryptoPricesPairs(count)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});
			break;
			case 'totalcryptosall':
				return Promise.all([
					ExchangeDataService.totalCryptoPricesPairs(0,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});
			break;
			case 'totalcryptonewlisting':
				return Promise.all([
					ExchangeDataService.totalcryptonewlisting()
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});
			break;
			case 'coin':
				return Promise.all([
					ExchangeDataService.coinmarketcapMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'bittrex':
				return Promise.all([
					ExchangeDataService.bittrexMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'bitfinex':
				return Promise.all([
					ExchangeDataService.bitfinexMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'hitbtc':
				return Promise.all([
					ExchangeDataService.hitbtcMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'gate':
				return Promise.all([
					ExchangeDataService.gateMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'kuna':
				return Promise.all([
					ExchangeDataService.kunaMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'okex':
				return Promise.all([
					ExchangeDataService.okexMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'binance':
				return Promise.all([
					ExchangeDataService.binanceMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'huobi':
				return Promise.all([
					ExchangeDataService.huobiMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'gemini':
				return Promise.all([
					ExchangeDataService.geminiMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'kraken':
				return Promise.all([
					ExchangeDataService.krakenMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'bitflyer':
				return Promise.all([
					ExchangeDataService.bitflyerMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'bithumb':
				return Promise.all([
					ExchangeDataService.bithumbMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'bitstamp':
				return Promise.all([
					ExchangeDataService.bitstampMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'bitz':
				return Promise.all([
					ExchangeDataService.bitzMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'lbank':
				return Promise.all([
					ExchangeDataService.lbankMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'coinone':
				return Promise.all([
					ExchangeDataService.coinoneMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'wex':
				return Promise.all([
					ExchangeDataService.wexMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'exmo':
				return Promise.all([
					ExchangeDataService.exmoMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'liqui':
				return Promise.all([
					ExchangeDataService.liquiMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'korbit':
				return Promise.all([
					ExchangeDataService.korbitMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});	
			break;
			case 'bitmex':
				return Promise.all([
					ExchangeDataService.bitmexMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});
			break;
			case 'livecoin':
				return Promise.all([
					ExchangeDataService.livecoinMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});
			break;
			case 'cex':
				return Promise.all([
					ExchangeDataService.cexMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});
			break;
			case 'kucoin':
				return Promise.all([
					ExchangeDataService.kucoinMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});
			break;
			case 'cryptopia':
				return Promise.all([
					ExchangeDataService.cryptopiaMarketData(count,currency)
				]).then(response => {callBack(response[0].data);}).catch(err => {callBack([]);});
			break;
			default:
				callBack([]);
			break;
		}
	},
	
	fixData:function(type,symbol,callBack){
		switch(type){
			case 'databysymbol':
				return Promise.all([
					ExchangeDataService.fixDataBySymbol(symbol)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});
			break;
			default:
				callBack([]);
			break;	
		}
	},
	
	fixPriceSources:function(base_currency,quote_currency,callBack){
		var _ = require('lodash');
		base_currency=_.toLower(base_currency);
		quote_currency=_.toLower(quote_currency);
		ExchangeDataService.fxMarketDataRelativePrices().then(fxData => {
			var atc_currencies=_.map(fxData.data,function(currency){return _.toLower(currency.currency)});
			
			ExchangeList.find({select:['id','name'],is_exchange:'yes'},function(err, exchange_list){
				if(_.isEmpty(exchange_list)){exchange_list=[];}
				return Promise.all(exchange_list.map((exchange) => {
					return new Promise(function(resolve,reject){
						var tickers=ExchangeTickers.findOne();
						tickers.where({exchange_id:exchange.id});
						tickers.sort('id DESC');
						tickers.then(function(tickers){
							if(!_.isEmpty(tickers)){
								var date_created=tickers.date_created;
								var tickers=tickers.tickers;
								switch(exchange.name){
									case 'gdax':
										var temp_array=[];
										var tickers2=_.filter(tickers,{base_currency:_.toUpper(base_currency)});
										if(!_.isEmpty(tickers2)){
											_.forEach(atc_currencies,function(currency_temp){
												var tickers_match=_.filter(tickers2,{quote_currency:_.toUpper(currency_temp)});
												if(!_.isEmpty(tickers_match)){
													tickers_match=_.head(tickers_match);
													temp_array.push({last:tickers_match.price,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
												}
											});
										}
										return resolve(temp_array);
									break;
									case 'bittrex':
										var temp_array=[];
										tickers=tickers.result;
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{MarketName:_.toUpper(base_currency+'-'+currency_temp)});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.Last,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'bitfinex':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{product_id:base_currency+currency_temp});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.last_price,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'hitbtc':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{symbol:_.toUpper(base_currency+currency_temp)});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.last,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'gate':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{product:base_currency+'_'+currency_temp});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.last,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'kuna':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{product:base_currency+currency_temp});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.last,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'okex':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{product:base_currency+'_'+currency_temp});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.ticker.last,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'binance':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{symbol:_.toUpper(base_currency+currency_temp)});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.lastPrice,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'huobi':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{product:base_currency+currency_temp});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.tick.bid[0],exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'gemini':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{product:base_currency+currency_temp});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.last,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'kraken':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{product:_.toUpper(base_currency+currency_temp)});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.last,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'bitflyer':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{product:_.toUpper(base_currency+'_'+currency_temp)});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.best_bid,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'bithumb':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{product:_.toUpper(base_currency+currency_temp)});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.buy_price,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;	
									case 'bitstamp':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{product:base_currency+currency_temp});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.last,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'bitz':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{product:base_currency+'_'+currency_temp});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.last,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'lbank':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{symbol:base_currency+'_'+currency_temp});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.ticker.latest,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'coinone':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{product:base_currency+currency_temp});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.last,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'wex':
										var temp_array=[];
										//AS IT IS A CRAP EXCHANGE
										/*_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{product:base_currency+'_'+currency_temp});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.last,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});*/
										return resolve(temp_array);					
									break;
									case 'exmo':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{product:_.toUpper(base_currency+'_'+currency_temp)});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.last_trade,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'liqui':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{product:base_currency+'_'+currency_temp});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.last,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'korbit':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{product:base_currency+'_'+currency_temp});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.last,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'bitmex':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{symbol:_.toUpper(base_currency+currency_temp)});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.lastPrice,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'livecoin':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{product:_.toUpper(base_currency+currency_temp)});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.last,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'cex':
										var temp_array=[];
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{product:_.toUpper(base_currency+currency_temp)});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.last,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'kucoin':
										var temp_array=[];
										tickers=tickers.data;
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{symbol:_.toUpper(base_currency+'-'+currency_temp)});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.lastDealPrice,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									case 'cryptopia':
										var temp_array=[];
										tickers=tickers.Data;
										_.forEach(atc_currencies,function(currency_temp){
											var tickers_match=_.filter(tickers,{Label:_.toUpper(base_currency+'/'+currency_temp)});
											if(!_.isEmpty(tickers_match)){
												tickers_match=_.head(tickers_match);
												temp_array.push({last:tickers_match.LastPrice,exchange:exchange.name,date_created:date_created,currency_temp:currency_temp});
											}
										});
										return resolve(temp_array);
									break;
									default:
										return resolve([]);
									break;
								}
							}
							else{
								return resolve([]);
							}
						}).catch(err => { callBack([]);});
					});	
				})).
				then(response => { 
					var return_array=[];
					_.forEach(response,function(exchange_data){
						if(!_.isEmpty(exchange_data)){
							var is_inserted=false;
							_.forEach(exchange_data,function(exchange_price){
								if(exchange_price.currency_temp==quote_currency){
									return_array.push(exchange_price);
									is_inserted=true;
								}
							});
							if(!is_inserted){
								var exchange_price=exchange_data[0];
								var rel_prices=_.filter(fxData.data,{currency:_.toUpper(exchange_price.currency_temp)});
								if(!_.isEmpty(rel_prices)){
									rel_prices=_.head(rel_prices);
									var rel_price=_.filter(rel_prices.prices,{currency:_.toUpper(quote_currency)});
									if(!_.isEmpty(rel_price)){
										rel_price=_.head(rel_price);
										exchange_price.last=exchange_price.last*rel_price.price;
										return_array.push(exchange_price);
									}
								}
							}
						}
					});
					callBack(return_array);
				}).
				catch(err => { callBack([]);});
			});	
		}).
		catch(err => { callBack([]);});
	},
	
	fxData:function(type,symbol,count,callBack){
		switch(type){
			case 'databysymbol':
				return Promise.all([
					ExchangeDataService.fxDataBySymbol(symbol,count)
				]).then(response => {callBack(response[0].data);}).catch( err => {callBack([]);});
			break;
			default:
				callBack([]);
			break;	
		}
	},
	
	exchanges_currencies:function(callBack){
		return Promise.all([
			ExchangeDataService.exchanges_currencies()
		]).then(response => {callBack(response[0]);}).catch( err => {callBack([]);});
	},
	
	predator:function(exchanges,currencies,callBack){
		var _ = require('lodash');
		exchanges=JSON.parse(exchanges);
		currencies=JSON.parse(currencies);
		var currencies_temp=currencies;
		return Promise.all(exchanges.map((exchange) => {
			switch(exchange){
				case 'gdax':
					var temp_array=[];
					return ExchangeDataService.gdaxMarketData().then(response => {
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							var tickers2=_.filter(tickers,{base_currency:_.toUpper(currency)});
							if(!_.isEmpty(tickers2)){
								_.forEach(currencies_temp,function(currency_temp){
									var tickers_match=_.filter(tickers2,{quote_currency:_.toUpper(currency_temp)});
									if(!_.isEmpty(tickers_match)){
										tickers_match=_.head(tickers_match);
										temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.ticker.price,volume:tickers_match.ticker.volume,exchange:exchange}});
									}
								});
							}
						});
						return temp_array;
					}).catch( err => {return [];});
				break;
				case 'bittrex':
					var temp_array=[];
					return ExchangeDataService.bittrexMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{MarketName:_.toUpper(currency+'-'+currency_temp)});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.Last,volume:tickers_match.Volume,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'coinmarketcap':
					var temp_array=[];
					return ExchangeDataService.coinmarketcapMarketData().then(response=>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							var tickers2=_.filter(tickers,{symbol:_.toUpper(currency)});
							if(!_.isEmpty(tickers2)){
								_.forEach(currencies_temp,function(currency_temp){
									if(_.toUpper(currency_temp)=='USD'){
										var tickers_match=_.head(tickers2);
										temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.price_usd,volume:tickers_match['24h_volume_usd'],exchange:exchange}});
									}
								});
							}
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'bitfinex':
					var temp_array=[];
					return ExchangeDataService.bitfinexMarketData().then(response=>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
							var tickers_match=_.filter(tickers,{product_id:currency+currency_temp});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.last_price,volume:tickers_match.volume,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'hitbtc':
					var temp_array=[];
					return ExchangeDataService.hitbtcMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{symbol:_.toUpper(currency+currency_temp)});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.last,volume:tickers_match.volume,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'gate':
					var temp_array=[];
					return ExchangeDataService.gateMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{product:currency+'_'+currency_temp});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.last,volume:tickers_match.baseVolume,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'kuna':
					var temp_array=[];
					return ExchangeDataService.kunaMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{product:currency+currency_temp});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.last,volume:tickers_match.vol,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'okex':
					var temp_array=[];
					return ExchangeDataService.okexMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{product:currency+'_'+currency_temp});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.ticker.last,volume:tickers_match.ticker.vol,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'binance':
					var temp_array=[];
					return ExchangeDataService.binanceMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{symbol:_.toUpper(currency+currency_temp)});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.lastPrice,volume:tickers_match.volume,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'huobi':
					var temp_array=[];
					return ExchangeDataService.huobiMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{product:currency+currency_temp});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.tick.bid[0],volume:tickers_match.tick.vol,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'gemini':
					var temp_array=[];
					return ExchangeDataService.geminiMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{product:currency+currency_temp});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.last,volume:tickers_match.vol,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'kraken':
					var temp_array=[];
					return ExchangeDataService.krakenMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{product:_.toUpper(currency+currency_temp)});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.last,volume:tickers_match.volume,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'bitflyer':
					var temp_array=[];
					return ExchangeDataService.bitflyerMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{product:_.toUpper(currency+'_'+currency_temp)});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.best_bid,volume:tickers_match.volume,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'bithumb':
					var temp_array=[];
					return ExchangeDataService.bithumbMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{product:_.toUpper(currency+currency_temp)});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.buy_price,volume:tickers_match.volume_1day,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;	
				case 'bitstamp':
					var temp_array=[];
					return ExchangeDataService.bitstampMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{product:currency+currency_temp});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.last,volume:tickers_match.volume,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'bitz':
					var temp_array=[];
					return ExchangeDataService.bitzMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{product:currency+'_'+currency_temp});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.last,volume:tickers_match.vol,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'lbank':
					var temp_array=[];
					return ExchangeDataService.lbankMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{symbol:currency+'_'+currency_temp});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.ticker.latest,volume:tickers_match.ticker.vol,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'coinone':
					var temp_array=[];
					return ExchangeDataService.coinoneMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{product:currency+currency_temp});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.last,volume:tickers_match.volume,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'wex':
					var temp_array=[];
					return ExchangeDataService.wexMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{product:currency+'_'+currency_temp});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.last,volume:tickers_match.vol,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'exmo':
					var temp_array=[];
					return ExchangeDataService.exmoMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{product:_.toUpper(currency+'_'+currency_temp)});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.last_trade,volume:tickers_match.vol,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'liqui':
					var temp_array=[];
					return ExchangeDataService.liquiMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{product:currency+'_'+currency_temp});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.last,volume:tickers_match.vol,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'korbit':
					var temp_array=[];
					return ExchangeDataService.korbitMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{product:currency+'_'+currency_temp});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.last,volume:tickers_match.volume,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'bitmex':
					var temp_array=[];
					return ExchangeDataService.bitmexMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{symbol:_.toUpper(currency+currency_temp)});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.lastPrice,volume:tickers_match.totalVolume,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'livecoin':
					var temp_array=[];
					return ExchangeDataService.livecoinMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{product:_.toUpper(currency+currency_temp)});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.last,volume:tickers_match.volume,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'cex':
					var temp_array=[];
					return ExchangeDataService.cexMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{product:_.toUpper(currency+currency_temp)});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.last,volume:tickers_match.volume,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'kucoin':
					var temp_array=[];
					return ExchangeDataService.kucoinMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{symbol:_.toUpper(currency+'-'+currency_temp)});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.lastDealPrice,volume:tickers_match.vol,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
				case 'cryptopia':
					var temp_array=[];
					return ExchangeDataService.cryptopiaMarketData().then(response =>{
						var tickers=response.data;
						_.forEach(currencies,function(currency){
							_.forEach(currencies_temp,function(currency_temp){
								var tickers_match=_.filter(tickers,{Label:_.toUpper(currency+'/'+currency_temp)});
								if(!_.isEmpty(tickers_match)){
									tickers_match=_.head(tickers_match);
									temp_array.push({product:currency+'_'+currency_temp,record:{price:tickers_match.LastPrice,volume:tickers_match.Volume,exchange:exchange}});
								}
							});
						});
						return temp_array;
					}).
					catch(err => {return [];});
				break;
			}
		})).
		then(response => {
			var return_array=[];
			_.forEach(response,function(exchange_data){
				_.forEach(exchange_data,function(data){
					if(_.isEmpty(_.filter(return_array,{product:data.product}))){
						return_array.push({product:data.product,records:[{price:data.record.price,volume:data.record.volume,exchange:data.record.exchange}]});
					}
					else{
						_.forEach(return_array,function(return_data){
							if(return_data.product==data.product){
								return_data.records.push({price:data.record.price,volume:data.record.volume,exchange:data.record.exchange});
								return_data.records.sort(function(a,b){ if(parseFloat(a.price)>parseFloat(b.price)){return -1;}else {return 1;}});
							}
						});
					}
				});
			});
			callBack(return_array);
		}).
		catch(err => {callBack([]);});
	},
	
	ico_data:function(callBack){
		return Promise.all([
			ExchangeDataService.ico_data()
		]).then(response=> {
			callBack(response[0].data);
		}).catch(err => {callBack([]);});
	},
	
	gainersLosers:function(callBack,count){
		return Promise.all([
			FrontendService.gainers_and_losers(count),
			ExchangeDataService.fxMarketData(count),
			ExchangeDataService.rssFid(5)
		]).then(response => {callBack({gainers:response[0].gainers_losers['gainer_24_h'],losers:response[0].gainers_losers['loser_24_h'],fx_data:response[1].data,feed:response[2]});}).catch( err => {callBack({gainers:[],losers:[],fx_data:[],feed:[]});});
	},
	
	gainers_and_losers_data:function(callBack){
		return Promise.all([
			FrontendService.gainers_and_losers()
		]).then(response => {callBack({gainers_1h:response[0].gainers_losers['gainer_1_h'],gainers_24h:response[0].gainers_losers['gainer_24_h'],gainers_7d:response[0].gainers_losers['gainer_7_d'],losers_1h:response[0].gainers_losers['loser_1_h'],losers_24h:response[0].gainers_losers['loser_24_h'],losers_7d:response[0].gainers_losers['loser_7_d']});}).catch( err => {callBack({gainers_1h:[],gainers_24h:[],gainers_7d:[],losers_1h:[],losers_24h:[],losers_7d:[]});});
	},
	
	gainers_data:function(callBack){
		return Promise.all([
			FrontendService.gainers_and_losers(),
		]).then(response => {callBack({gainers_1h:response[0].gainers_losers['gainer_1_h'],gainers_24h:response[0].gainers_losers['gainer_24_h'],gainers_7d:response[0].gainers_losers['gainer_7_d']});}).catch( err => {callBack({gainers_1h:[],gainers_24h:[],gainers_7d:[]});});
	},
	
	losers_data:function(callBack){
		return Promise.all([
			FrontendService.gainers_and_losers(),
		]).then(response => {callBack({losers_1h:response[0].gainers_losers['loser_1_h'],losers_24h:response[0].gainers_losers['loser_24_h'],losers_7d:response[0].gainers_losers['loser_7_d']});}).catch( err => {callBack({losers_1h:[],losers_24h:[],losers_7d:[]});});
	},

	volume_24_hour_currency_data:function(callBack){
		var _ = require('lodash');
		
		ExchangeList.find({},function(err, currencies){
			if(!_.isEmpty(currencies)){
				var exchange_array=[];
				_.forEach(currencies,function(currency){
					exchange_array.push({id:currency.id,name:currency.name,is_exchange:currency.is_exchange});
				});
				
				return Promise.all(exchange_array.map((exchange)=>{
					var exchange_data_array=[];
					switch(exchange.name){
						case 'gdax':
							return ExchangeDataService.gdaxMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.display_name,'/','')),volume:data.ticker.volume,price:data.ticker.price,variation:data.ticker.variation});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'bittrex':
							return ExchangeDataService.bittrexMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.BaseCurrency),pair:_.toUpper(_.replace(data.MarketName,'-','')),volume:data.Volume,price:data.Bid,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => { exchange.data=[];return exchange;});
						break;
						
						case 'bitfinex':
							return ExchangeDataService.bitfinexMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.product_id.substr(0,3)),pair:_.toUpper(data.product_id),volume:data.volume,price:data.bid,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => { exchange.data=[];return exchange;});
						break;
			
						case 'hitbtc':
							return ExchangeDataService.hitbtcMarketData().
							then(exchange_data => { 
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.baseCurrency),pair:_.toUpper(data.symbol),volume:data.volume,price:data.bid,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => { exchange.data=[];return exchange;});
						break;
			
						case 'gate':
							return ExchangeDataService.gateMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(_.join(_.split(data.product,'_',1))),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.baseVolume,price:data.last,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => { exchange.data=[];return exchange;});
						break;
						
						case 'coinmarketcap':
							return ExchangeDataService.coinmarketcapMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.symbol),pair:_.toUpper(data.symbol+'USD'),volume:data['24h_volume_usd'],price:data.price_usd,variation:data.percent_change_24h});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'okex':
							return ExchangeDataService.okexMarketData().
							then(exchange_data => { 
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(_.join(_.split(data.product,'_',1))),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.ticker.vol,price:data.ticker.last,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'binance':
							return ExchangeDataService.binanceMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.baseAsset),pair:_.toUpper(data.symbol),volume:data.volume,price:data.lastPrice,variation:data.priceChangePercent});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'huobi':
							return ExchangeDataService.huobiMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.tick.vol,price:data.tick.bid[0],variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;

						case 'gemini':
							return ExchangeDataService.geminiMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.currency),pair:_.toUpper(data.product),volume:data.vol,price:data.bid,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;

						case 'kraken':
							return ExchangeDataService.krakenMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.price,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;

						case 'bitflyer':
							return ExchangeDataService.bitflyerMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.volume,price:data.best_bid,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;	
						
						case 'bithumb':
							return ExchangeDataService.bithumbMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume_1day,price:data.sell_price,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'bitstamp':
							return ExchangeDataService.bitstampMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.bid,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'bitz':
							return ExchangeDataService.bitzMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.sell,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'lbank':
							return ExchangeDataService.lbankMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.symbol,'_','')),volume:data.ticker.vol,price:data.ticker.latest,variation:data.ticker.change});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'coinone':
							return ExchangeDataService.coinoneMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.last,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'wex':
							return ExchangeDataService.wexMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.last,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'exmo':
							return ExchangeDataService.exmoMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.last_trade,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'liqui':
							return ExchangeDataService.liquiMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.last,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'korbit':
							return ExchangeDataService.korbitMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.volume,price:data.last,variation:data.changePercent});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'bitmex':
							return ExchangeDataService.bitmexMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.symbol,'_','')),volume:data.totalVolume,price:data.settledPrice,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'livecoin':
							return ExchangeDataService.livecoinMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.last,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'cex':
							return ExchangeDataService.cexMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.bid,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'kucoin':
							return ExchangeDataService.kucoinMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.coinType),pair:_.toUpper(_.replace(data.symbol,'-','')),volume:data.vol,price:data.lastDealPrice,variation:data.changeRate});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						case 'cryptopia':
							return ExchangeDataService.cryptopiaMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.Label,'/','')),volume:data.Volume,price:data.LastPrice,variation:data.Change});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						default:
							exchange.data=[];
							return exchange;
					}
				})).
				then(response_data =>{
					var temp_array=[];
					var return_array=[];
					_.forEach(response_data,function(exchange_data){
						if(!_.isEmpty(exchange_data.data)){
							temp_array.push(exchange_data);
						}
					});
					
					_.forEach(temp_array,function(exchange_data){
						_.forEach(exchange_data.data,function(coins){
							var exists=false;
							_.forEach(return_array,function(currency_data){
								if(currency_data.currency==coins.currency){
									_.forEach(currency_data.data,function(source){
										if(source.currency==_.replace(coins.pair,coins.currency,'') && source.src==_.toUpper(exchange_data.name)){
											exists=true;
										}
									});
								}
							});
							
							if(!exists){
								var is_updated=false;
								_.forEach(return_array,function(currency_data){
									if(currency_data.currency==coins.currency){
										currency_data.data.push({price:coins.price,volume:coins.volume,currency:_.replace(coins.pair,coins.currency,''),src:_.toUpper(exchange_data.name)});
										is_updated=true;
									}
								});
								
								if(!is_updated){
									var temp=[];
									temp.push({price:coins.price,volume:coins.volume,currency:_.replace(coins.pair,coins.currency,''),src:_.toUpper(exchange_data.name)});
									return_array.push({currency:coins.currency,data:temp});
								}
							}
						});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					_.forEach(return_array,function(currencies){
						currencies.data.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					});
					
					callBack({currency:return_array});
				}).
				catch(err => { callBack({currency:[]});});
			}
		});
	},
	
	volume_24_hour_currency_symbol_data(symbol,data,callBack){
		var _ = require('lodash');
		symbol=_.toLower(symbol);
		
		if(data=='history'){
			ExchangeDataService.totalCryptoPricesHistorySymbol(symbol).then(history => {
				callBack({history:history,currency:symbol});
			}).catch( err => {callBack({history:[],currency:symbol});});
		}
		else if(data=='market'){
			ExchangeList.find({},function(err, currencies){
				if(!_.isEmpty(currencies)){
					var exchange_array=[];
					_.forEach(currencies,function(currency){
						exchange_array.push({id:currency.id,name:currency.name,is_exchange:currency.is_exchange});
					});
					
					return Promise.all(exchange_array.map((exchange)=>{
						var exchange_data_array=[];
						switch(exchange.name){
							case 'gdax':
								return ExchangeDataService.gdaxMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.base_currency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.display_name,'/','')),volume:data.ticker.volume,price:data.ticker.price,variation:data.ticker.variation});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'bittrex':
								return ExchangeDataService.bittrexMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.BaseCurrency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.BaseCurrency),pair:_.toUpper(_.replace(data.MarketName,'-','')),volume:data.Volume,price:data.Bid,variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => { exchange.data=[];return exchange;});
							break;
							
							case 'bitfinex':
								return ExchangeDataService.bitfinexMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.product_id.substr(0,3))==symbol){
											exchange_data_array.push({currency:_.toUpper(data.product_id.substr(0,3)),pair:_.toUpper(data.product_id),volume:data.volume,price:data.bid,variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => { exchange.data=[];return exchange;});
							break;
				
							case 'hitbtc':
								return ExchangeDataService.hitbtcMarketData().
								then(exchange_data => { 
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.baseCurrency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.baseCurrency),pair:_.toUpper(data.symbol),volume:data.volume,price:data.bid,variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => { exchange.data=[];return exchange;});
							break;
				
							case 'gate':
								return ExchangeDataService.gateMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(_.join(_.split(data.product,'_',1)))==symbol){
											exchange_data_array.push({currency:_.toUpper(_.join(_.split(data.product,'_',1))),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.baseVolume,price:data.last,variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => { exchange.data=[];return exchange;});
							break;
							
							case 'coinmarketcap':
								return ExchangeDataService.coinmarketcapMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.symbol)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.symbol),pair:_.toUpper(data.symbol+'USD'),volume:data['24h_volume_usd'],price:data.price_usd,variation:data.percent_change_24h});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'okex':
								return ExchangeDataService.okexMarketData().
								then(exchange_data => { 
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(_.join(_.split(data.product,'_',1)))==symbol){
											exchange_data_array.push({currency:_.toUpper(_.join(_.split(data.product,'_',1))),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.ticker.vol,price:data.ticker.last,variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'binance':
								return ExchangeDataService.binanceMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.baseAsset)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.baseAsset),pair:_.toUpper(data.symbol),volume:data.volume,price:data.lastPrice,variation:data.priceChangePercent});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'huobi':
								return ExchangeDataService.huobiMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.base_currency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.tick.vol,price:data.tick.bid[0],variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'gemini':
								return ExchangeDataService.geminiMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.currency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.currency),pair:_.toUpper(data.product),volume:data.vol,price:data.bid,variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'kraken':
								return ExchangeDataService.krakenMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.base_currency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.price,variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'bitflyer':
								return ExchangeDataService.bitflyerMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.base_currency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.volume,price:data.best_bid,variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'bithumb':
								return ExchangeDataService.bithumbMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.base_currency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume_1day,price:data.sell_price,variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'bitstamp':
								return ExchangeDataService.bitstampMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.base_currency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.bid,variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'bitz':
								return ExchangeDataService.bitzMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.base_currency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.sell,variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'lbank':
								return ExchangeDataService.lbankMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.base_currency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.symbol,'_','')),volume:data.ticker.vol,price:data.ticker.latest,variation:data.ticker.change});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'coinone':
								return ExchangeDataService.coinoneMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.base_currency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.last,variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'wex':
								return ExchangeDataService.wexMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.base_currency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.last,variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'exmo':
								return ExchangeDataService.exmoMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.base_currency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.last_trade,variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'liqui':
								return ExchangeDataService.liquiMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.base_currency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.last,variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'korbit':
								return ExchangeDataService.korbitMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.base_currency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.volume,price:data.last,variation:data.changePercent});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'bitmex':
								return ExchangeDataService.bitmexMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.base_currency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.symbol,'_','')),volume:data.totalVolume,price:data.settledPrice,variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'livecoin':
								return ExchangeDataService.livecoinMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.base_currency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.last,variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'cex':
								return ExchangeDataService.cexMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.base_currency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.bid,variation:'---'});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							
							case 'kucoin':
								return ExchangeDataService.kucoinMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.coinType)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.coinType),pair:_.toUpper(_.replace(data.symbol,'-','')),volume:data.vol,price:data.lastDealPrice,variation:data.changeRate});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							case 'cryptopia':
								return ExchangeDataService.cryptopiaMarketData().
								then(exchange_data => {
									_.forEach(exchange_data.data,function(data){
										if(_.toLower(data.base_currency)==symbol){
											exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.Label,'/','')),volume:data.Volume,price:data.LastPrice,variation:data.Change});
										}
									});
									exchange.data=exchange_data_array;
									return exchange;
								}).
								catch(err => {exchange.data=[];return exchange;});
							break;
							default:
								exchange.data=[];
								return exchange;
						}
					})).
					then(symbol_response =>{
						var temp_array=[];
						var return_array=[];
						_.forEach(symbol_response,function(exchange_data){
							if(!_.isEmpty(exchange_data.data)){
								temp_array.push(exchange_data);
							}
						});
						
						_.forEach(temp_array,function(exchange_data){
							_.forEach(exchange_data.data,function(coins){
								var exists=false;
								_.forEach(return_array,function(currency_data){
									if(currency_data.currency==coins.currency){
										_.forEach(currency_data.data,function(source){
											if(source.currency==_.replace(coins.pair,coins.currency,'') && source.src==_.toUpper(exchange_data.name)){
												exists=true;
											}
										});
									}
								});
								
								if(!exists){
									var is_updated=false;
									_.forEach(return_array,function(currency_data){
										if(currency_data.currency==coins.currency){
											currency_data.data.push({price:coins.price,volume:coins.volume,currency:_.replace(coins.pair,coins.currency,''),src:_.toUpper(exchange_data.name)});
											is_updated=true;
										}
									});
									
									if(!is_updated){
										var temp=[];
										temp.push({price:coins.price,volume:coins.volume,currency:_.replace(coins.pair,coins.currency,''),src:_.toUpper(exchange_data.name)});
										return_array.push({currency:coins.currency,data:temp});
									}
								}
							});
						});
						
						//SORT DATA IN DESC ORDER OF VOLUME
						_.forEach(return_array,function(currencies){
							currencies.data.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
						});
						
						callBack({markets:return_array,currency:symbol});
					}).
					catch(err => { callBack({markets:[],currency:symbol});});
				}
			});
		}		
	},
	
	volume_24_hour_market_data:function(market,callBack){
		var _ = require('lodash');
		market=_.toLower(market);
		
		ExchangeList.find({},function(err, exchanges){
			if(!_.isEmpty(exchanges)){
				var exchange_array=[];
				_.forEach(exchanges,function(exchange){
					exchange_array.push({id:exchange.id,name:exchange.name,is_exchange:exchange.is_exchange});
				});
				
				return Promise.all(exchange_array.map((exchange)=>{
					var exchange_data_array=[];
					switch(exchange.name){
						case 'gdax':
							return ExchangeDataService.gdaxMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(_.replace(data.display_name,'/',''))==market){
										exchange_data_array.push({market:_.toUpper(_.replace(data.display_name,'/','')),volume:data.ticker.volume,price:data.ticker.price,variation:data.ticker.variation});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'bittrex':
							return ExchangeDataService.bittrexMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(_.replace(data.MarketName,'-',''))==market){
										exchange_data_array.push({market:_.toUpper(_.replace(data.MarketName,'-','')),volume:data.Volume,price:data.Bid,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => { exchange.data=[];return exchange;});
						break;
						
						case 'bitfinex':
							return ExchangeDataService.bitfinexMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(data.product_id)==market){
										exchange_data_array.push({market:_.toUpper(data.product_id),volume:data.volume,price:data.bid,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => { exchange.data=[];return exchange;});
						break;
			
						case 'hitbtc':
							return ExchangeDataService.hitbtcMarketData().
							then(exchange_data => { 
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(data.symbol)==market){
										exchange_data_array.push({market:_.toUpper(data.symbol),volume:data.volume,price:data.bid,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => { exchange.data=[];return exchange;});
						break;
			
						case 'gate':
							return ExchangeDataService.gateMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(_.replace(data.product,'_',''))==market){
										exchange_data_array.push({market:_.toUpper(_.replace(data.product,'_','')),volume:data.baseVolume,price:data.last,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => { exchange.data=[];return exchange;});
						break;
						
						case 'coinmarketcap':
							return ExchangeDataService.coinmarketcapMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(data.symbol+'usd')==symbol){
										exchange_data_array.push({market:_.toUpper(data.symbol+'usd'),volume:data['24h_volume_usd'],price:data.price_usd,variation:data.percent_change_24h});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'kuna':
							return ExchangeDataService.kunaMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){ 
									if(_.toLower(data.product)==market){ 
										exchange_data_array.push({market:_.toUpper(data.product),volume:data.vol,price:data.price,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;

						case 'okex':
							return ExchangeDataService.okexMarketData().
							then(exchange_data => { 
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(_.replace(data.product,'_',''))==market){
										exchange_data_array.push({market:_.toUpper(_.replace(data.product,'_','')),volume:data.ticker.vol,price:data.ticker.last,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;

						case 'binance':
							return ExchangeDataService.binanceMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(data.symbol)==market){
										exchange_data_array.push({market:_.toUpper(data.symbol),volume:data.volume,price:data.lastPrice,variation:data.priceChangePercent});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;	
						
						case 'huobi':
							return ExchangeDataService.huobiMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(data.product)==market){
										exchange_data_array.push({market:_.toUpper(data.product),volume:data.tick.vol,price:data.tick.bid[0],variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'gemini':
							return ExchangeDataService.geminiMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(data.product)==market){
										exchange_data_array.push({market:_.toUpper(data.product),volume:data.vol,price:data.bid,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'kraken':
							return ExchangeDataService.krakenMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(data.product)==market){
										exchange_data_array.push({market:_.toUpper(data.product),volume:data.volume,price:data.price,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'bitflyer':
							return ExchangeDataService.bitflyerMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(_.replace(data.product,'_',''))==market){
										exchange_data_array.push({market:_.toUpper(_.replace(data.product,'_','')),volume:data.volume,price:data.best_bid,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'bithumb':
							return ExchangeDataService.bithumbMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(data.product)==market){
										exchange_data_array.push({market:_.toUpper(data.product),volume:data.volume_1day,price:data.sell_price,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'bitstamp':
							return ExchangeDataService.bitstampMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(data.product)==market){
										exchange_data_array.push({market:_.toUpper(data.product),volume:data.volume,price:data.bid,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'bitz':
							return ExchangeDataService.bitzMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(_.replace(data.product,'_',''))==market){
										exchange_data_array.push({market:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.sell,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'lbank':
							return ExchangeDataService.lbankMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(_.replace(data.symbol,'_',''))==market){
										exchange_data_array.push({market:_.toUpper(_.replace(data.symbol,'_','')),volume:data.ticker.vol,price:data.ticker.latest,variation:data.ticker.change});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'coinone':
							return ExchangeDataService.coinoneMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(data.product)==market){
										exchange_data_array.push({market:_.toUpper(data.product),volume:data.volume,price:data.last,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'wex':
							return ExchangeDataService.wexMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(_.replace(data.product,'_',''))==market){
										exchange_data_array.push({market:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.last,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'exmo':
							return ExchangeDataService.exmoMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(_.replace(data.product,'_',''))==market){
										exchange_data_array.push({market:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.last_trade,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'liqui':
							return ExchangeDataService.liquiMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(_.replace(data.product,'_',''))==market){
										exchange_data_array.push({market:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.last,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'korbit':
							return ExchangeDataService.korbitMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(_.replace(data.product,'_',''))==market){
										exchange_data_array.push({market:_.toUpper(_.replace(data.product,'_','')),volume:data.volume,price:data.last,variation:data.changePercent});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'bitmex':
							return ExchangeDataService.bitmexMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(_.replace(data.symbol,'_',''))==market){
										exchange_data_array.push({market:_.toUpper(_.replace(data.symbol,'_','')),volume:data.totalVolume,price:data.settledPrice,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'livecoin':
							return ExchangeDataService.livecoinMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(data.product)==market){
										exchange_data_array.push({market:_.toUpper(data.product),volume:data.volume,price:data.last,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'cex':
							return ExchangeDataService.cexMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(data.product)==market){
										exchange_data_array.push({market:_.toUpper(data.product),volume:data.volume,price:data.bid,variation:'---'});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'kucoin':
							return ExchangeDataService.kucoinMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(_.replace(data.symbol,'-',''))==market){
										exchange_data_array.push({market:_.toUpper(_.replace(data.symbol,'-','')),volume:data.vol,price:data.lastDealPrice,variation:data.changeRate});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						case 'cryptopia':
							return ExchangeDataService.cryptopiaMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									if(_.toLower(_.replace(data.Label,'/',''))==market){
										exchange_data_array.push({market:_.toUpper(_.replace(data.Label,'/','')),volume:data.Volume,price:data.LastPrice,variation:data.Change});
									}
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
			
						default:
							exchange.data=[];
							return exchange;
					}
				})).
				then(market_response =>{
					var temp_array=[];
					var return_array=[];
					_.forEach(market_response,function(exchange_data){
						if(!_.isEmpty(exchange_data.data)){
							temp_array.push(exchange_data);
						}
					});
					
					_.forEach(temp_array,function(exchange_data){
						_.forEach(exchange_data.data,function(markets){
							var exists=false;
							_.forEach(return_array,function(market_data){
								if(market_data.market==markets.market){
									_.forEach(market_data.data,function(source){
										if(source.src==_.toUpper(exchange_data.name)){
											exists=true;
										}
									});
								}
							});
							
							if(!exists){
								var is_updated=false;
								_.forEach(return_array,function(market_data){
									if(market_data.market==markets.market){
										market_data.data.push({price:markets.price,volume:markets.volume,src:_.toUpper(exchange_data.name)});
										is_updated=true;
									}
								});
								
								if(!is_updated){
									var temp=[];
									temp.push({price:markets.price,volume:markets.volume,src:_.toUpper(exchange_data.name)});
									return_array.push({market:markets.market,data:temp});
								}
							}
						});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					_.forEach(return_array,function(markets){
						markets.data.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					});
					
					callBack({market:return_array});
				}).
				catch(err => { callBack({market:[]});});
			}
		});		
	},
	
	product_history_chart:function(market,callBack){
		var _ = require('lodash');
		market=_.toLower(market);
		
		return Promise.all([
			ExchangeDataService.totalCryptoHistoryChart(market)
		]).
		then(chart => {
			callBack({chart:chart[0]});
		}).
		catch(err => { callBack({chart:[]});});
	},
	
	volume_24_hour_exchange_data:function(callBack){
		var _ = require('lodash');
	
		ExchangeList.find({},function(err, exchanges){
			if(!_.isEmpty(exchanges)){
				var exchange_array=[];
				_.forEach(exchanges,function(exchange){
					exchange_array.push({id:exchange.id,name:exchange.name,is_exchange:exchange.is_exchange});
				});
				
				return Promise.all(exchange_array.map((exchange)=>{
					var exchange_data_array=[];
					switch(exchange.name){
						case 'gdax':
							return ExchangeDataService.gdaxMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.display_name,'/','')),volume:data.ticker.volume,price:data.ticker.price,variation:data.ticker.variation});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'bittrex':
							return ExchangeDataService.bittrexMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.BaseCurrency),pair:_.toUpper(_.replace(data.MarketName,'-','')),volume:data.Volume,price:data.Bid,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => { exchange.data=[];return exchange;});
						break;
						
						case 'bitfinex':
							return ExchangeDataService.bitfinexMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.product_id.substr(0,3)),pair:_.toUpper(data.product_id),volume:data.volume,price:data.bid,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => { exchange.data=[];return exchange;});
						break;
			
						case 'hitbtc':
							return ExchangeDataService.hitbtcMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.baseCurrency),pair:_.toUpper(data.symbol),volume:data.volume,price:data.bid,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => { exchange.data=[];return exchange;});
						break;
			
						case 'gate':
							return ExchangeDataService.gateMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(_.join(_.split(data.product,'_',1))),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.baseVolume,price:data.last,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => { exchange.data=[];return exchange;});
						break;
						
						case 'coinmarketcap':
							return ExchangeDataService.coinmarketcapMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.symbol),pair:_.toUpper(data.symbol+'USD'),volume:data['24h_volume_usd'],price:data.price_usd,variation:data.percent_change_24h});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'okex':
							return ExchangeDataService.okexMarketData().
							then(exchange_data => { 
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(_.join(_.split(data.product,'_',1))),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.ticker.vol,price:data.ticker.last,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'binance':
							return ExchangeDataService.binanceMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.baseAsset),pair:_.toUpper(data.symbol),volume:data.volume,price:data.lastPrice,variation:data.priceChangePercent});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'huobi':
							return ExchangeDataService.huobiMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.tick.vol,price:data.tick.bid[0],variation:'--'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'gemini':
							return ExchangeDataService.geminiMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.currency),pair:_.toUpper(data.product),volume:data.vol,price:data.bid,variation:'--'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'kraken':
							return ExchangeDataService.krakenMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.price,variation:'--'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'bitflyer':
							return ExchangeDataService.bitflyerMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.volume,price:data.best_bid,variation:'--'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'bithumb':
							return ExchangeDataService.bithumbMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume_1day,price:data.sell_price,variation:'--'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'bitstamp':
							return ExchangeDataService.bitstampMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.bid,variation:'--'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'bitz':
							return ExchangeDataService.bitzMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.sell,variation:'--'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'lbank':
							return ExchangeDataService.lbankMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.symbol,'_','')),volume:data.ticker.vol,price:data.ticker.latest,variation:data.ticker.change});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'coinone':
							return ExchangeDataService.coinoneMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.last,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'wex':
							return ExchangeDataService.wexMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.last,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'exmo':
							return ExchangeDataService.exmoMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.last_trade,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'liqui':
							return ExchangeDataService.liquiMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.last,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'korbit':
							return ExchangeDataService.korbitMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.volume,price:data.last,variation:data.changePercent});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'bitmex':
							return ExchangeDataService.bitmexMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.symbol,'_','')),volume:data.totalVolume,price:data.settledPrice,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'livecoin':
							return ExchangeDataService.livecoinMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.last,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'cex':
							return ExchangeDataService.cexMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.bid,variation:'---'});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						
						case 'kucoin':
							return ExchangeDataService.kucoinMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.coinType),pair:_.toUpper(_.replace(data.symbol,'-','')),volume:data.vol,price:data.lastDealPrice,variation:data.changeRate});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
						case 'cryptopia':
							return ExchangeDataService.cryptopiaMarketData().
							then(exchange_data => {
								_.forEach(exchange_data.data,function(data){
									exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.Label,'/','')),volume:data.Volume,price:data.LastPrice,variation:data.Change});
								});
								exchange.data=exchange_data_array;
								return exchange;
							}).
							catch(err => {exchange.data=[];return exchange;});
						break;
			
						default:
							exchange.data=[];
							return exchange;
					}
				})).
				then(exchange_response =>{
					var temp_array=[];
					var return_array=[];
					_.forEach(exchange_response,function(exchange_data){
						if(!_.isEmpty(exchange_data.data)){
							exchange_data.displayName=_.toUpper(exchange_data.name);
							temp_array.push(exchange_data);
						}
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					_.forEach(temp_array,function(exchange_data){
						exchange_data.data.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					});
					
					callBack({exchange:temp_array});
				}).
				catch(err => { callBack({exchange:[]});});
			}
		});
	},
	
	exchange_data:function(exchangeName,callBack){	
		var _ = require('lodash');
		var exchange_data_array=[];
		
		switch(exchangeName){
			
			case 'gdax':
				ExchangeDataService.gdaxMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.display_name),volume:data.ticker.volume,price:data.ticker.price,variation:data.ticker.variation});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
				
			case 'bittrex':
				ExchangeDataService.bittrexMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.BaseCurrency),pair:_.toUpper(_.replace(data.MarketName,'-','/')),volume:data.Volume,price:data.Bid,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => { callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'bitfinex':
				ExchangeDataService.bitfinexMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.product_id.substr(0,3)),pair:_.toUpper(data.product_id),volume:data.volume,price:data.bid,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => { callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'hitbtc':
				ExchangeDataService.hitbtcMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.baseCurrency),pair:_.toUpper(data.symbol),volume:data.volume,price:data.bid,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => { callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'gate':
				ExchangeDataService.gateMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(_.join(_.split(data.product,'_',1))),pair:_.toUpper(data.product),volume:data.baseVolume,price:data.last,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => { callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'coinmarketcap':
				return ExchangeDataService.coinmarketcapMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.symbol),pair:_.toUpper(data.symbol+'USD'),volume:data['24h_volume_usd'],price:data.price_usd,variation:data.percent_change_24h});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'kuna':
				return ExchangeDataService.kunaMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:'---',pair:_.toUpper(data.product),volume:data.vol,price:data.price,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'okex':
				return ExchangeDataService.okexMarketData().
				then(exchange_data => { 
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(_.join(_.split(data.product,'_',1))),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.ticker.vol,price:data.ticker.last,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'binance':
				return ExchangeDataService.binanceMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.baseAsset),pair:_.toUpper(data.symbol),volume:data.volume,price:data.lastPrice,variation:data.priceChangePercent});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'huobi':
				return ExchangeDataService.huobiMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.tick.vol,price:data.tick.bid[0],variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'gemini':
				return ExchangeDataService.geminiMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.currency),pair:_.toUpper(data.product),volume:data.vol,price:data.bid,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'kraken':
				return ExchangeDataService.krakenMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.price,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'bitflyer':
				return ExchangeDataService.bitflyerMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.volume,price:data.best_bid,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'bithumb':
				return ExchangeDataService.bithumbMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume_1day,price:data.sell_price,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'bitstamp':
				return ExchangeDataService.bitstampMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.bid,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'bitz':
				return ExchangeDataService.bitzMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.sell,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'lbank':
				return ExchangeDataService.lbankMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.symbol,'_','')),volume:data.ticker.vol,price:data.ticker.latest,variation:data.ticker.change});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'coinone':
				return ExchangeDataService.coinoneMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.last,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'wex':
				return ExchangeDataService.wexMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.last,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'exmo':
				return ExchangeDataService.exmoMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.last_trade,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'liqui':
				return ExchangeDataService.liquiMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.vol,price:data.last,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'korbit':
				return ExchangeDataService.korbitMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.product,'_','')),volume:data.volume,price:data.last,variation:data.changePercent});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'bitmex':
				return ExchangeDataService.bitmexMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.symbol,'_','')),volume:data.totalVolume,price:data.settledPrice,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'livecoin':
				return ExchangeDataService.livecoinMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.last,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'cex':
				return ExchangeDataService.cexMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(data.product),volume:data.volume,price:data.bid,variation:'---'});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.volume)>parseFloat(b.volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'kucoin':
				return ExchangeDataService.kucoinMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.coinType),pair:_.toUpper(_.replace(data.symbol,'-','')),volume:data.vol,price:data.lastDealPrice,variation:data.changeRate});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.vol)>parseFloat(b.vol)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;
			
			case 'cryptopia':
				return ExchangeDataService.cryptopiaMarketData().
				then(exchange_data => {
					_.forEach(exchange_data.data,function(data){
						exchange_data_array.push({currency:_.toUpper(data.base_currency),pair:_.toUpper(_.replace(data.Label,'/','')),volume:data.Volume,price:data.LastPrice,variation:data.Change});
					});
					
					//SORT DATA IN DESC ORDER OF VOLUME
					exchange_data_array.sort(function(a,b){ if(parseFloat(a.Volume)>parseFloat(b.Volume)){return -1;}else {return 1;}});
					
					callBack({name:_.toUpper(exchange_data.name),url:exchange_data.url,data:exchange_data_array});
				}).
				catch(err => {callBack({name:'',url:'',data:exchange_data_array});});
			break;

			default:
			callBack({name:'',url:'',data:[]});
		}
	},
	
	tc_history_data:function(callBack){
		var Promise = require("bluebird");
		var moment = require("moment");
		return Promise.all([
			//ExchangeDataService.totalCryptosPriceHistory(moment().format('HH'),'day'),
			ExchangeDataService.totalCryptosPriceHistory(24,'day'),
			ExchangeDataService.totalCryptosPriceHistory(24*7,'week'),
		]).
		then(response => { 
			callBack({history1_day:response[0],history7_day:response[1]});
		}).
		catch(err => { callBack({history1_day:[],history7_day:[]});});
	},
	
	gainers_and_losers:function(count=0){
		var _=require('lodash');
		return new Promise(function(resolve,reject){
			ExchangeList.findOne({name:'coinmarketcap'},function(err, coin_market_exchange){
				var gainers_losers=[];
				gainers_losers['gainer_1_h']=[];
				gainers_losers['loser_1_h']=[];
				gainers_losers['gainer_24_h']=[];
				gainers_losers['loser_24_h']=[];
				gainers_losers['gainer_7_d']=[];
				gainers_losers['loser_7_d']=[];
				if(!_.isEmpty(coin_market_exchange)){
					var tickers=ExchangeTickers.findOne();
					tickers.where({exchange_id:coin_market_exchange.id});
					tickers.sort('id DESC');
					tickers.then(function(tickers){
						var tickers=tickers.tickers;
						//PROCESS TO GET LAST 1 HOUR GAINERS AND LOOSERS
						tickers.sort(function(a,b){ if(parseFloat(a.percent_change_1h)>parseFloat(b.percent_change_1h)){return -1;}else {return 1;}});
						var temp=[];
						_.forEach(tickers,function(ticker){
							if(parseFloat(ticker.percent_change_1h)>0){
								temp.push(ticker);
							}
						});
						
						if(count>0){
							temp=_.slice(temp,0,count);
						}
						gainers_losers['gainer_1_h']=temp;
						tickers.reverse();
						temp=[];
						_.forEach(tickers,function(ticker){
							if(parseFloat(ticker.percent_change_1h)<0){
								temp.push(ticker);
							}
						});
						if(count>0){
							temp=_.slice(temp,0,count);
						}
						gainers_losers['loser_1_h']=temp;
						
						//PROCESS TO GET LAST 24 HOURS GAINERS AND LOOSERS
						tickers.sort(function(a,b){if(parseFloat(a.percent_change_24h)>parseFloat(b.percent_change_24h)){return -1;}else {return 1;}});
						
						temp=[];
						_.forEach(tickers,function(ticker){
							if(parseFloat(ticker.percent_change_24h)>0){
								temp.push(ticker);
							}
						});
						
						if(count>0){ 
							temp=_.slice(temp,0,count);
						}
						gainers_losers['gainer_24_h']=temp;
						
						tickers.reverse();
						
						temp=[];
						_.forEach(tickers,function(ticker){
							if(parseFloat(ticker.percent_change_24h)<0){
								temp.push(ticker);
							}
						});
						if(count>0){ 
							temp=_.slice(temp,0,count);
						}
						gainers_losers['loser_24_h']=temp;
						
						//PROCESS TO GET LAST 7 DAYS GAINERS AND LOOSERS
						tickers.sort(function(a,b){if(parseFloat(a.percent_change_7d)>parseFloat(b.percent_change_7d)){return -1;}else {return 1;}});
						
						temp=[];
						_.forEach(tickers,function(ticker){
							if(parseFloat(ticker.percent_change_7d)>0){
								temp.push(ticker);
							}
						});
						if(count>0){ 
							temp=_.slice(temp,0,count);
						}
						gainers_losers['gainer_7_d']=temp;
						
						tickers.reverse();
						
						temp=[];
						_.forEach(tickers,function(ticker){
							if(parseFloat(ticker.percent_change_7d)<0){
								temp.push(ticker);
							}
						});
						if(count>0){ 
							temp=_.slice(temp,0,count);
						}
						gainers_losers['loser_7_d']=temp; 
						return resolve({gainers_losers:gainers_losers});
					});
				}
				else{
					return resolve({gainers_losers:gainers_losers});
				}
			});
		});	
	},
	
	RSS:function(callBack){
		let Parser = require('rss-parser');
		let parser = new Parser();

		return (async () => {
		 	
		 	try{
		  		let feed = await parser.parseURL('http://bloc10.com/feed');
		  		return feed;	
		  	}catch(error){
		  		return {title:"The RSSfeed Cannot be load", items:[{title:"The feed cannot be load",content:"The RSS feed cannot be load"}]};
		  	}

		})();
	}
	
};
