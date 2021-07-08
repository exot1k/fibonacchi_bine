

{
  "targets": [
    {
      "target_name": "get_fibonacci_number_with_bine",
      "sources": [ "get_fibonacci_number_with_bine.cc"],
      "include_dirs" : ["<!(node -e \"require('nan')\")"]
    }
  ]
}
