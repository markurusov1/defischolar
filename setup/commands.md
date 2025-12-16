# Various commands/scripts for setup

## Hugo 

### Clean up Hugo-generated site static files

```Remove-Item -Recurse -Force resources, public```

### Start the Hugo server with a full site rebuild

```hugo server --disableFastRender```

### Cleans up the project's Go module files by removing unused dependencies

```hugo mod tidy```

### site build in default mode

```hugo```

### server start in default mode

```hugo server```