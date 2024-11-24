type Role = {
  name: string;
  tracks?: string[];
};

// roles should be in the following format: role;role(tracks:1,2);role;...
export const parseRoles = (roles: string): Role[] => {
  const rolesArray = roles.split(';').map((role) => {
    const [name, tracks] = role.split('(tracks:');
    return {
      name: `role.${name.trim()}`,
      tracks: tracks
        ? tracks
            .split(')')[0]
            .split(',')
            .map((track) => track.trim())
        : undefined,
    };
  });
  return rolesArray;
};
