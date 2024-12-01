for f in *.json
do
    curl -X PUT -H "Content-type":"application/json" -d "@$f" localhost:8000/car
    echo " <- $f"
done