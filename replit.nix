{ pkgs }: {
    deps = [
        pkgs.nodejs-16_x
        pkgs.openssh_with_kerberos
        pkgs.gh
        pkgs.yarn
        pkgs.nodejs
        pkgs.nodePackages.typescript
        pkgs.ffmpeg
        pkgs.imagemagick
        pkgs.git
    ];
}