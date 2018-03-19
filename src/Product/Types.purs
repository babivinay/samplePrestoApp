module Product.Types where

import Data.Foreign.Class (class Encode,class Decode)
import Data.Foreign.Generic (defaultOptions, genericEncode,genericDecode)
import Data.Generic.Rep (class Generic)

newtype LoginCreds = LoginCreds 
	{ username :: String
	, password :: String
	}

data BillPayFailure = FetchOperatorFailure String | BillPaymentFailure String | UserAbort

derive instance genericLoginCreds  :: Generic LoginCreds _
instance encodeLoginCreds :: Encode LoginCreds where
  encode = genericEncode (defaultOptions { unwrapSingleConstructors = true })
instance decodeLoginCreds :: Decode LoginCreds where
  decode = genericDecode (defaultOptions { unwrapSingleConstructors = true })

