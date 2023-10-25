cd src/generated
rm -rf * 
cp -r ../../../api/sdk/typescript-node/models .
cp -r ../../../api/sdk/typescript-node/types . 
cp -r ../../../api/sdk/typescript-node/apis . 
cp -r ../../../api/sdk/typescript-node/auth .
cp -r ../../../api/sdk/typescript-node/http .
cp -r ../../../api/sdk/typescript-node/*.ts .
